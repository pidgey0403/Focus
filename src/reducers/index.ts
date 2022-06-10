import breakReducer from "./break";
import studyReducer from "./study";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    study: studyReducer,
    break: breakReducer,
});

export default rootReducer;