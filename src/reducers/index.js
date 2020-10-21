import { combineReducers } from "redux";
import nodes from "./nodes";
import blocks from "./blocks";
import alert from "./alert";
const rootReducer = combineReducers({
  nodes,
  blocks,
  alert,
});

export default rootReducer;
