import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userListReducer from "features/User_Page/redux/userSlice";
import loginReducer from "features/Login/redux/loginSlide";

const reducer = combineReducers({
  userList: userListReducer,
  user: loginReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
