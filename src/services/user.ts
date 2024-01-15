import {
  UserDataType,
  UserLoginResponseType,
  UserLoginType,
  UserRegisterResponseType,
  UserRegisterType,
} from "@/utils/types";
import axios from "axios";

const url = process.env.BACKEND_URL;

export const userRegister = async (props: UserRegisterType) => {
  if (props.email && props.password && props.password) {
    try {
      const response: UserRegisterResponseType = await axios.post(
        url + "/api/user/register",
        props
      );
      return response;
      //   if (response.message === "Success") {
      //   } else {
      //   }
    } catch (err) {
      console.log(err);
    }
  }
};

export const userLogin = async (props: UserLoginType) => {
  if (props.email && props.password && props.password) {
    try {
      const response: UserLoginResponseType = await axios.post(
        url + "/api/user/login",
        props
      );
      return { email: response.user.email, username: response.user.username };
      //   if (response.message === "Success") {
      //   } else {
      //   }
    } catch (err) {
      console.log(err);
    }
  }
};
