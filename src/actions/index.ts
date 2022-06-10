/* Action creators */

export const incrStdy = (genre: string):object =>{ // increment study timer
    return {
        type: 'INCREMENT',
        payload: genre
    };
};

export const decrStdy = (genre:string):object => { // decrement study timer
    return {
        type: 'DECREMENT',
        payload: genre
    };
};

export const incrBrk = (genre:string):object =>{ // increment break timer
    return {
        type: 'INCREMENT',
        payload: genre
    };
};

export const decrBrk= (genre:string):object => { // decrement break timer
    return {
        type: 'DECREMENT',
        payload: genre
    };
};