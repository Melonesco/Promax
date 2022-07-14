import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upper from './components/upper-block/Upper';
import Header from './components/header-block/Header';
import Footer from './components/footer-block/Footer';
import Main from './pages/main-page/Main';
import Register from './pages/register-page/Register';
import Login from './pages/login-page/Login';
import Email from './pages/email-page/Email';
import Categories from './pages/categories-page/Categories';
import { ProductPage } from './pages/product-page/ProductPage';

function Connect () {
  return (
    <Router>
      <Upper/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/categories" element={<Categories/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/email" element={<Email/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/:type/:name" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Connect;
