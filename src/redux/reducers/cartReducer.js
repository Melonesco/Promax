import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from '../types';

const initialState = {
  productData: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_PRODUCT_TO_CART:
    return {
      ...state,
      productData: [...state.productData, action.data]
    };
  case DELETE_PRODUCT_FROM_CART:
    const itemIndex = state.productData.findIndex(res => res.id === action.id);

    const deleteItemFromCart = [
      ...state.productData.slice(0, itemIndex),
      ...state.productData.slice(itemIndex + 1)
    ];

    return {
      ...state,
      productData: deleteItemFromCart
    };
  default:
    return state;
  }
};
