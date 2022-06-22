import './Header.css';
import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../images/logo/logo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faClose} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <>
            <div className={'main'}>
                <div>
                    <header className={'main__header'}>
                        <nav className={'navbar'}>
                            <Link id={'nav__img'} to="/"><img src={Logo} alt=""/></Link>
                            <div className={'nav__burger'}>
                                <input type="checkbox" id={'toggle'}/>
                                <label htmlFor={'toggle'}><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faBars} /></label>
                                <div className={'nav__menu'}>
                                    <label id="nav__close" htmlFor={'toggle'}><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faClose} /></label>
                                    <h2>Main Menu</h2>
                                    <ul id={'nav-list'} className={'nav__list'}>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                    </ul>
                                    <h2>My Account</h2>
                                    <ul className={'nav__list'}>
                                        <li><Link to="/login">Log In</Link></li>
                                        <li><Link to="/register">Create Account</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <Link to="/"><FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faShoppingCart} /></Link>
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