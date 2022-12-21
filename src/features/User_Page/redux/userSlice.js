import actions from "./type";
import produce from "immer";

const intialState = {
  userList: [],
};

const reducer = (state = intialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.GET_USERLIST:
        draft.userList = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;
