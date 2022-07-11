import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Connect from './Connect';
import { rootReducer } from './redux/reducers/rootReducer';
import './App.css';

const store = createStore(rootReducer);

function App () {
  return (
    <Provider store={store}>
      <Connect/>
    </Provider>
  );
}

export default App;
