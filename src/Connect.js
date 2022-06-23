import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upper from './components-pages/upper-page/Upper';
import Header from './components-pages/header-page/Header';
import Footer from './components-pages/footer-page/Footer';
import Main from './pages/main-page/Main';
import Register from './pages/register-page/Register';
import Login from './pages/login-page/Login';
import Email from './pages/email-page/Email';
import Categories from './pages/categories-page/Categories';

function Connect () {
  // const listId = Products.data.map(item => <Route exact path={`/categories/${item.id}`} element={<Page/>}></Route>)

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
        {/* <Route exact path={'/categories/:id'} component={Products} element={<Page/>}/> */}
        {/* {listId} */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Connect;
