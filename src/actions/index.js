export const incrStdy = (genre) =>{ // action creator to increment study timer
    return {
        type: 'INCREMENT',
        payload: genre
    };
};

export const decrStdy = (genre) => { // action creator to decrement study timer
    return {
        type: 'DECREMENT',
        payload: genre
        
    };
};

export const incrBrk = (genre) =>{ // action creator to increment break timer
    return {
        type: 'INCREMENT',
        payload: genre
    };
};


export const decrBrk= (genre) => { // action creator to decrement break timer
    return {
        type: 'DECREMENT',
        payload: genre
    };
};

export const addText = (text) => { 
    return {
        type: 'UPDATE',
        payload: text
    };
};
