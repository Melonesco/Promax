import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { rootReducer } from './redux/reducers/rootReducer';
import Upper from './components/upper-block/Upper';
import Header from './components/header-block/Header';
import Main from './pages/main-page/Main';
import Categories from './pages/categories-page/Categories';
import { ProductPage } from './pages/product-page/ProductPage';
import Footer from './components/footer-block/Footer';
import Products from './storage/products/Products';
import './App.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Upper/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/categories" element={<Categories/>}/>
          <Route exact path="/product/:id" element={<ProductPage products={Products}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
