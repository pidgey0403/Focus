/* Study timer reducer */

const studyReducer = (
  state: number = 25,
  action: { type: string } // actions can sometimes also have payload
) => {
  const number = state; // copy state data into variable; never directly mutate state
  switch (action.type) {
    case "INCREMENT":
      return number + 1; // increment the study timer integer
    case "DECREMENT":
      return number - 1; // decrement the study timer integer
    default:
      return state;
  }
};

export default studyReducer;
