import { combineReducers } from "redux";
import logincheck from "./logincheck";
import special from "./special";
import reserve from "./reserve";

//루트 리듀서
const rootReducer = combineReducers({ special: special, logincheck: logincheck, reserve: reserve});
export default rootReducer;