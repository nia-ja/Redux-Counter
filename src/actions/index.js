export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CLEAR = 'CLEAR';

export const increment = (count) => {
  return {
    type: INCREMENT,
    payload: count
  }
};

export const decrement = (count) => {
  return {
    type: DECREMENT,
    payload: count
  }
};

export const clear = () => {
  return {
    type: CLEAR
  }
};