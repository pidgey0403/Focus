import breakReducer from "./break";
import studyReducer from "./study";
import taskReducer from "./task";

import { combineReducers } from "redux";

// this is combining our 4 other reducers 
const rootReducer = combineReducers({
    study: studyReducer,
    break: breakReducer,
    task: taskReducer,
})

export default rootReducer;