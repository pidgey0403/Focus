/* Root reducer */

import studyReducer from "./study";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  study: studyReducer,
});

export default rootReducer;
