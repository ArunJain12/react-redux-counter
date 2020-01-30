import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
  results: []
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.counter })
      });
    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(
        result => result.id !== action.elementId
      );
      return updateObject(state, { results: updatedResults });
    default:
      return state;
  }
};

export default resultReducer;
