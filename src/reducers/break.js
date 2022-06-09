const breakReducer = (state = 5, action) => {
    if (action.payload === 'break'){
        switch(action.type){
            case 'INCREMENT': return state +1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    } else {
        return state;
    }
}

export default breakReducer;