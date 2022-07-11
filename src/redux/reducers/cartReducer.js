import { CART_ADD, CART_DELETE } from '../types';

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case CART_ADD:
    return {
      ...state,
      cart: [...state.cart, action.data]
    };
  case CART_DELETE:

    const { id } = action;
    const { cart } = state;

    const itemIndex = cart.findIndex(res => res.id === id);

    const deleteItemInCart = [
      ...cart.slice(0, itemIndex),
      ...cart.slice(itemIndex + 1)
    ];

    return {
      ...state,
      cart: deleteItemInCart
    };
  default:
    return state;
  }
};
