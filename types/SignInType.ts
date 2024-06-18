export type SignInBodyType = {
  email: string;
  password: string;
};

export type SignInResponseType = {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
  message: string;
};
