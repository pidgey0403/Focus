"use strict";
exports.__esModule = true;
var breakReducer = function (state, action) {
    if (state === void 0) { state = 5; }
    if (action.payload === "break") {
        switch (action.type) {
            case 'INCREMENT': return state + 1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    }
    else {
        return state;
    }
};
exports["default"] = breakReducer;
