/* Action creators */

export const incrStdy = () => {
  // increment study timer
  return {
    type: "INCREMENT",
  };
};

export const decrStdy = () => {
  // decrement study timer
  return {
    type: "DECREMENT",
  };
};
