import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.POST_USER_LOGIN,
        data: userLogin,
      });
      next({
        type: actions.SET_PROFILE,
        payload: res.data.content,
      });
      localStorage.setItem("token", res.data.content.accessToken);
    } catch (error) {
      throw error;
    }
  };
};

export const signupAction = (userInfo) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.POST_USER_SIGNUP,
        data: userInfo,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
