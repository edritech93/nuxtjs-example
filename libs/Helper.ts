export const Helper = {
  setToken: async (token: string) => {
    localStorage.setItem("accessToken", token);
  },
  getToken: async (): Promise<string | null> => {
    return localStorage.getItem("accessToken");
  },
  setRefreshToken: async (token: string) => {
    localStorage.setItem("refreshToken", token);
  },
  getRefreshToken: async (): Promise<string | null> => {
    return localStorage.getItem("refreshToken");
  },
  removeToken: async () => {
    localStorage.removeItem("accessToken");
  },
  removeRefreshToken: async () => {
    localStorage.removeItem("refreshToken");
  },
  format3Digit: (str: string | number) => {
    return str
      ?.toString()
      .replace(/\./g, "")
      .replace(/(\d)(?=(\d{3})+$)/g, "$1" + ".");
  },
  getSizeKb: (bitSize: number): string => {
    return `${(bitSize / 1000).toFixed(0)} KB`;
  },
  getBaseUrl: () => {
    const config = useRuntimeConfig();
    return config.public.baseUrl;
  },
  getAttachmentUrl: (id: number) => {
    return `${Helper.getBaseUrl()}api/attachment/${id}`;
  },
};
