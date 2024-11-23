import { combineReducers } from "redux";
import crudReducer from "./Reducer";

const rootReducer = combineReducers({
  crud: crudReducer,
});

export default rootReducer;
