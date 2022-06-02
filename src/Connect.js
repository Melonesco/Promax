import Upper from "./components-pages/upper-page/Upper";
import Header from "./components-pages/header-page/Header";
import Footer from "./components-pages/footer-page/Footer";
import Main from "./pages/main-page/Main";
import Register from "./pages/register-page/Register";
import Login from './pages/login-page/Login';
import Email from './pages/email-page/Email';
import Categories from "./pages/categories-page/Categories";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Products from "./components/products/Products";
import Page from './pages/cart-page/Page'

function Connect() {

    //const listId = Products.data.map(item => <Route exact path={`/categories/${item.id}`} element={<Page/>}></Route>)

    return(
        <>
            <Upper/>
            <Header/>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Main/>}/>
                    <Route exact path='/categories' element={<Categories/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/email' element={<Email/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route exact path={'/categories/:id'} component={Products} element={<Page/>}/>
                    {/*{listId}*/}
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default Connect;