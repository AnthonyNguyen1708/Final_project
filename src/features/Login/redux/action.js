import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: "/api/Users/signin",
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


  

