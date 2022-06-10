const studyReducer = (state:number=25,action: { payload: string; type: string; }) => {
    if(action.payload === "study"){
        switch(action.type){
            case 'INCREMENT': return state +1;
            case 'DECREMENT': return state-1;
            default: return state;
        }
    } else {
        return state;
    }
}

export default studyReducer;