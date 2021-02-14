import { combineReducers } from "redux";
import usersReducers from "./UsersReducer";
import userReducers from "./UserReducer";
const rootReducers = combineReducers({
  usersReducers,
  userReducers
});
export default rootReducers;
