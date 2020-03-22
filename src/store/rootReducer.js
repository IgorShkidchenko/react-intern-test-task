import { combineReducers } from "redux";
import { repositoryReducer } from "./repositories";

export default combineReducers({
  repo: repositoryReducer,
});
