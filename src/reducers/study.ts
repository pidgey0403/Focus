/* Study timer reducer */

const studyReducer = (
  state: number = 25,
  action: { payload: string; type: string }
) => {
  if (action.payload === "study") {
    // if action text is study
    switch (action.type) {
      case "INCREMENT":
        return state + 1; // increment the study timer integer
      case "DECREMENT":
        return state - 1; // decrement the study timer integer
      default:
        return state;
    }
  } else {
    return state;
  }
};

export default studyReducer;
