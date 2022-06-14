"use strict";
/* Action creators */
exports.__esModule = true;
exports.decrStdy = exports.incrStdy = void 0;
var incrStdy = function (genre) {
    return {
        type: 'INCREMENT',
        payload: genre
    };
};
exports.incrStdy = incrStdy;
var decrStdy = function (genre) {
    return {
        type: 'DECREMENT',
        payload: genre
    };
};
exports.decrStdy = decrStdy;
