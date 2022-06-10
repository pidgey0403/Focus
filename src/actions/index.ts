/* Action creators */

export const incrStdy = ():object =>{ // increment study timer
    return {
        type: 'INCREMENT'
    };
};

export const decrStdy = ():object => { // decrement study timer
    return {
        type: 'DECREMENT'
    };
};

export const incrBrk = ():object =>{ // increment break timer
    return {
        type: 'INCREMENT'
    };
};

export const decrBrk= ():object => { // decrement break timer
    return {
        type: 'DECREMENT'
    };
};