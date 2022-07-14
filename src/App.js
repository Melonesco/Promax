import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import Connect from './Connect';
import { rootReducer } from './redux/reducers/rootReducer';
import './App.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)
));

function App () {
  return (
    <Provider store={store}>
      <Connect/>
    </Provider>
  );
}

export default App;
