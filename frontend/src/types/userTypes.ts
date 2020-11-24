export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

export type AuthenticationPayload = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
};

export type ErrorPayload = {
  message: string;
};

export interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}
export interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: AuthenticationPayload;
}
export interface UserLoginFail {
  type: typeof USER_LOGIN_FAIL;
  payload: ErrorPayload;
}
export interface UserLogout {
  type: typeof USER_LOGOUT;
}
export type UserLoginTypes =
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFail
  | UserLogout;

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export interface UserRegisterRequest {
  type: typeof USER_REGISTER_REQUEST;
}
export interface UserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: AuthenticationPayload;
}
export interface UserRegisterFail {
  type: typeof USER_REGISTER_FAIL;
  payload: ErrorPayload;
}
export type UserRegisterTypes =
  | UserRegisterRequest
  | UserRegisterSuccess
  | UserRegisterFail;

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export type ProfilePayload = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
};

export interface UserDetailsRequest {
  type: typeof USER_DETAILS_REQUEST;
}
export interface UserDetailsSuccess {
  type: typeof USER_DETAILS_SUCCESS;
  payload: ProfilePayload;
}
export interface UserDetailsFail {
  type: typeof USER_DETAILS_FAIL;
  payload: ErrorPayload;
}
export type UserDetailsTypes =
  | UserDetailsRequest
  | UserDetailsSuccess
  | UserDetailsFail;

export const USER_UPDATEPROFILE_REQUEST = "USER_UPDATEPROFILE_REQUEST";
export const USER_UPDATEPROFILE_SUCCESS = "USER_UPDATEPROFILE_SUCCESS";
export const USER_UPDATEPROFILE_FAIL = "USER_UPDATEPROFILE_FAIL";

export interface UserUpdateProfileRequest {
  type: typeof USER_UPDATEPROFILE_REQUEST;
}
export interface UserUpdateProfileSuccess {
  type: typeof USER_UPDATEPROFILE_SUCCESS;
  payload: ProfilePayload;
}
export interface UserUpdateProfileFail {
  type: typeof USER_UPDATEPROFILE_FAIL;
  payload: ErrorPayload;
}
export type UserUpdateDetailsTypes =
  | UserUpdateProfileRequest
  | UserUpdateProfileSuccess
  | UserUpdateProfileFail;