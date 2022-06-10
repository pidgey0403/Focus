const breakReducer = (state: number = 5, action: { payload: string; type: string; }) => {
    if (action.payload === "break") {
        switch (action.type) {
            case 'INCREMENT': return state + 1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    } else {
        return state;
    }
}

export default breakReducer;