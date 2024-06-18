import axios, {
  type AxiosBasicCredentials,
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method,
} from "axios";
import type { SellPhotoParamType } from "~/types/SellPhotoType";
import { type ShowAlertType } from "../types/ShowAlertType";
import type { SignInBodyType } from "~/types/SignInType";
import { Helper } from "./Helper";

type ApiRequest = {
  baseUrl?: string;
  url: string;
  method: Method;
  timeout?: number;
  data?: {};
  params?: {};
  force?: boolean;
  contentType?: "form-data";
  auth?: AxiosBasicCredentials;
};

enum ServerEnum {
  Api = "api",
  Other = "other",
}

enum TokenEnum {
  Token = "token",
  Refresh = "refresh",
}

export class Api {
  async _request(
    request: ApiRequest,
    targetServer: ServerEnum = ServerEnum.Api,
    targetToken: TokenEnum = TokenEnum.Token
  ) {
    let baseUrl: string = "";
    switch (targetServer) {
      case ServerEnum.Api:
        baseUrl = `${Helper.getBaseUrl()}api/`;
        break;

      case ServerEnum.Other:
        baseUrl = request?.baseUrl ?? "";
        break;

      default:
        break;
    }
    let options: AxiosRequestConfig = {
      url: request.url,
      method: request?.method ?? "GET",
      baseURL: baseUrl,
      timeout: request.timeout === 0 ? request.timeout : 1000 * 90, // default is `0` (no timeout)
    };
    let optHeader = {};
    let token = await Helper.getToken();
    if (targetToken === TokenEnum.Refresh) {
      token = await Helper.getRefreshToken();
    }
    if (token) {
      optHeader = { Authorization: `Bearer ${token}` };
    }
    if (request.contentType && request.contentType === "form-data") {
      optHeader = {
        ...optHeader,
        "Content-Type": "multipart/form-data",
      };
    }
    options.headers = optHeader;
    if (request.auth) {
      options.auth = request.auth;
    }
    if (request.params) {
      options.params = request.params;
    }
    if (request.data) {
      options.data = request.data;
    }
    return axios.request(options);
  }

  singleRequest(request: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      request
        .then((response: AxiosResponse) => {
          resolve(response);
        })
        .catch((error: AxiosError) => reject(getError(error)));
    });
  }

  async signInApp(args: SignInBodyType) {
    return this._request({
      url: "user-auth/sign-in",
      method: "POST",
      data: args,
    });
  }

  async signInRefresh() {
    return this._request(
      {
        url: "user-auth/sign-in/refresh",
        method: "POST",
      },
      ServerEnum.Api,
      TokenEnum.Refresh
    );
  }

  async getMyProfile() {
    return this._request({
      url: "profile/me",
      method: "GET",
    });
  }

  async editProfile(args: any) {
    return this._request({
      url: "profile",
      method: "PUT",
      data: args,
    });
  }

  async getAllPhotoList() {
    return this._request({
      url: "photo-marketplace",
      method: "GET",
    });
  }

  async uploadAttachment(args: FormData) {
    return this._request({
      url: "attachment/upload",
      method: "POST",
      data: args,
      contentType: "form-data",
    });
  }

  async getSellPhoto(args: SellPhotoParamType) {
    return this._request({
      url: "photo-sell",
      method: "GET",
      params: args,
    });
  }

  async getPhotoDetail(args: number) {
    return this._request({
      url: `photo-sell/by-id/${args}`,
      method: "GET",
    });
  }

  async addSellPhoto(args: any) {
    return this._request({
      url: "photo-sell",
      method: "POST",
      data: args,
    });
  }

  async editSellPhoto(id: number, args: any) {
    return this._request({
      url: `photo-sell/${id}`,
      method: "PUT",
      data: args,
    });
  }

  async deleteSellPhoto(args: number) {
    return this._request({
      url: `photo-sell/${args}`,
      method: "DELETE",
    });
  }

  async deleteAllSellPhoto(args: any) {
    return this._request({
      url: "photo-sell/delete-all",
      method: "POST",
      data: args,
    });
  }

  async getPhotoTag(args: any) {
    return this._request({
      url: "photo-tag",
      method: "GET",
      params: args,
    });
  }

  async addPhotoTag(args: any) {
    return this._request({
      url: "photo-tag",
      method: "POST",
      data: args,
    });
  }
}

function getError(error: any): ShowAlertType {
  const status = error?.response?.status ?? null;
  const data = error?.response?.data ?? null;
  let message = null;
  if (data) {
    message = data.message || data.Message || data.error;
  } else if (status === 401) {
    message = "401";
  } else if (status === 404) {
    message = "Server not found";
  } else if (status >= 500 || !message) {
    message = "Oops! Something went wrong.\nPlease try again in a few minutes.";
  }
  return {
    title: "Error",
    description: message,
    status: status,
    data: data,
  };
}

const API = new Api();

export { API };
