import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo4.png';
import { Cart } from '../cart/Cart';
import { MenuBlock } from '../menu-block/MenuBlock';
import './Header.css';

function Header () {
  return (
    <header>
      <nav className={'navbar'}>
        <Link id={'nav__img'} to="/">
          <img src={Logo} alt=""/>
        </Link>
        <div className={'nav__blocks'}>
          <MenuBlock/>
          <Cart/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
