import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

export const fetchUserList = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.GET_USERLIST,
    });
    console.log("A", res.data);
    next({
      type: actions.GET_USERLIST,
      payload: res.data.content,
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

export const deleteUser = (id) => {
  return async (next) => {
    try {
      await requester({
        method: "DELETE",
        url: apiPath.DELETE_USER + "?id=" + id,
      });
      next(fetchUserList);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
