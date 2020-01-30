import { STORE_RESULT, DELETE_RESULT } from "./actionTypes";

export const saveResult = value => {
  return {
    type: STORE_RESULT,
    counter: value
  };
};

export const storeResult = value => {
  return (dispatch, getState) => {
    const oldCounter = getState().ctr.counter;
    console.log(oldCounter);
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    elementId: id
  };
};
