import { PRODUCT_ADD_TO_CART, PRODUCT_CURRENT, PRODUCT_DELETE_FROM_CART } from './types';

export const productAddToCart = (product, id) => {
  return {
    type: PRODUCT_ADD_TO_CART,
    data: { product, id }
  };
};

export const productDeleteFromCart = (id) => {
  return {
    type: PRODUCT_DELETE_FROM_CART,
    id
  };
};

export const setCurrentProduct = (item) => {
  return {
    type: PRODUCT_CURRENT,
    item
  };
};
