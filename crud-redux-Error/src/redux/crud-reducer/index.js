import { combineReducers } from "redux";
import crudReducer from "./reducer";

const rootReducer = combineReducers({
    crudReducer,
  });

export default rootReducer;

