import { UserDataStateType, UserLoginType } from "@/utils/types";
import { atom } from "recoil";

export const userState = atom({
    key: "user",
    default: {} as UserDataStateType | null
});