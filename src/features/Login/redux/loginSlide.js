import produce from "immer";
import actions from "./type";

// immutable
const initialState = {
  profile: null,
  success: false,
  error: false,
};

// shallow comparison
const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_PROFILE:
        draft.profile = payload;
        // success = true;
        break;

      // case actions.LOGIN_SUCCEED:
      //   success = true

      // case "abc":
      //   draft.profile = payload;
      //   break;

      default:
        break;
    }
  });
};

export default reducer;
