import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { currentProductReducer } from './currentProductReducer';

export const rootReducer = combineReducers({
  cartReducer,
  currentProductReducer
});
