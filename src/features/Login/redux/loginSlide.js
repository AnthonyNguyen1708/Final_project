import produce from "immer";
import actions from "./type";

// immutable
const initialState = {
  profile: null,
};

// shallow comparison
const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_PROFILE:
        draft.profile = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;