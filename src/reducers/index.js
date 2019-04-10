import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: initialState.count++
      }
    case DECREMENT:
      return {
        ...state,
        count: initialState.count--
      }
    default:
      return state;
  }
};
