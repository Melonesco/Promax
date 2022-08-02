import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
