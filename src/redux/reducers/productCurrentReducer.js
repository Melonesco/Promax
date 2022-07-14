import { PRODUCT_CURRENT } from '../types';

const initialState = {
  productCurrent: null
};

export const productCurrentReducer = (state = initialState, action) => {
  switch (action.type) {
  case PRODUCT_CURRENT:
    return {
      ...state,
      productCurrent: action
    };
  default:
    return state;
  }
};
