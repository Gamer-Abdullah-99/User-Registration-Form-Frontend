import { Dispatch, SetStateAction } from "react";

export interface RegisterFormType {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface UserDataType {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserDataStateType {
  username: string;
  email: string;
}

export interface UserRegisterType {
  username: string;
  email: string;
  password: string;
}

export interface UserRegisterResponseType {
  _id: string;
  email: string;
  message: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}
export interface UserLoginResponseType {
  accessToken: string;
  user: UserDataType;
  message: string;
}

export interface ToastType {
  toast: string;
  setToast: Dispatch<SetStateAction<string>>;
}
