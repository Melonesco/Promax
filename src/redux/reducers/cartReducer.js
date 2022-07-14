import { PRODUCT_ADD_TO_CART, PRODUCT_DELETE_FROM_CART } from '../types';

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case PRODUCT_ADD_TO_CART:
    return {
      ...state,
      cart: [...state.cart, action.data]
    };
  case PRODUCT_DELETE_FROM_CART:
    const itemIndex = state.cart.findIndex(res => res.id === action.id);

    const deleteItemInCart = [
      ...state.cart.slice(0, itemIndex),
      ...state.cart.slice(itemIndex + 1)
    ];

    return {
      ...state,
      cart: deleteItemInCart
    };
  default:
    return state;
  }
};
