import { CART_ADD, CART_DELETE } from './types';

export const cartAdd = (text, id) => {
  return {
    type: CART_ADD,
    data: { text, id }
  };
};

export const cartDelete = (id) => {
  return {
    type: CART_DELETE,
    id
  };
};
