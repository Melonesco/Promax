import './Header.css';
import React from "react";
import Logo from '../../images/logo/logo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from '../../pages/main-page/Main'
import Register from '../../pages/register-page/Register';
import Login from "../../pages/login-page/Login";

function Header() {
    return(
        <>
            <div className={'main'}>
                <div>
                    <header className={'main__header'}>
                        <nav className={'navbar'}>
                            <a id={'nav__img'} href="/"><img src={Logo} alt=""/></a>
                            <div className={'nav__burger'}>
                                <input type="checkbox" id={'toggle'}/>
                                <label htmlFor={'toggle'}><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faBars} /></label>
                                <div className={'nav__menu'}>
                                    <label id="nav__close" htmlFor={'toggle'}><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faClose} /></label>
                                    <h2>Main Menu</h2>
                                    <ul id={'nav-list'} className={'nav__list'}>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                    <h2>My Account</h2>
                                    <ul className={'nav__list'}>
                                        <li><a href="/login">Log In</a></li>
                                        <li><a href="/register">Create Account</a></li>
                                    </ul>
                                </div>



                                <div>
                                    <a href="/"><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faSearch} /></a>
                                </div>
                                <div>
                                    <a href="/"><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faShoppingCart} /></a>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header;