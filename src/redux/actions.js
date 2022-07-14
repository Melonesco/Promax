import { ADD_PRODUCT_TO_CART, CURRENT_PRODUCT, DELETE_PRODUCT_FROM_CART } from './types';

export const addProductToCart = (product, id) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    data: { product, id }
  };
};

export const deleteProductFromCart = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    id
  };
};

export const currentProduct = (item) => {
  return {
    type: CURRENT_PRODUCT,
    item
  };
};
