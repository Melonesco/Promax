import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo4.png';
import { CartBlock } from '../cart-block/CartBlock';
import { MenuBlock } from '../menu-block/MenuBlock';

function Header () {
  return (
    <header>
      <nav className={'navbar'}>
        <Link id={'nav__img'} to="/"><img src={Logo} alt=""/></Link>
        <div className={'nav__blocks'}>
          <MenuBlock/>
          <CartBlock/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
