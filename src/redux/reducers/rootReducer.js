import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productCurrentReducer } from './productCurrentReducer';

export const rootReducer = combineReducers({
  cartReducer,
  productCurrentReducer
});
