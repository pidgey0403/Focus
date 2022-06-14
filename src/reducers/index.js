"use strict";
exports.__esModule = true;
var study_1 = require("./study");
var redux_1 = require("redux");
var rootReducer = (0, redux_1.combineReducers)({
    study: study_1["default"]
});
exports["default"] = rootReducer;
