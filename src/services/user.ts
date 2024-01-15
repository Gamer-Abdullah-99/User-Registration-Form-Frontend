import {
  UserLoginResponseType,
  UserLoginType,
  UserRegisterResponseType,
  UserRegisterType,
} from "@/utils/types";
import axios from "axios";
import dotenv from "dotenv";
import { NextApiResponse } from "next";

dotenv.config();

const url = process.env.BACKEND_URL || "http://localhost:5000";

export const Register = async (props: UserRegisterType) => {
  if (props.email && props.username && props.password) {
    try {
      const response: UserRegisterResponseType = await axios.post(
        `${url}/api/user/register`,
        props,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
};

export const Login = async (props: UserLoginType) => {
  if (props.email && props.password) {
    try {
      const response: any = await axios.post(`${url}/api/user/login`, props, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   localStorage.setItem(
      //     "User",
      //     JSON.stringify({
      //       email: response.user.email,
      //       username: response.user.username,
      //     })
      //   );
      //   console.log(response.data);
      return {
        email: response.data.user.email,
        username: response.data.user.username,
      };
    } catch (err) {
      console.log(err);
    }
  }
};
