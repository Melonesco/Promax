import { CURRENT_PRODUCT } from '../types';

const initialState = {
  currentProduct: null
};

export const currentProductReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENT_PRODUCT:
    return {
      ...state,
      currentProduct: action
    };
  default:
    return state;
  }
};
