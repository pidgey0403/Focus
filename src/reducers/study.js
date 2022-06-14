exports.__esModule = true;
var studyReducer = function (state, action) {
    if (state === void 0) { state = 25; }
    if (action.payload === "study") {
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
exports["default"] = studyReducer;
