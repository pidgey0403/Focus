/* Root reducer */

import studyReducer from "./study";

import { combineReducers } from "redux";

// reducer composition
const rootReducer = combineReducers({
  study: studyReducer,
});

export default rootReducer;
