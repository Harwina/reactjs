import { combineReducers } from "redux";
import crudReducer from "./TodoReducer";

const rootReducer = combineReducers({
    crud :crudReducer
})

export default rootReducer