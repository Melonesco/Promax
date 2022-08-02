import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import './MenuBlock.css';

export const MenuBlock = () => {
  return (
    <div className={'nav__burger'}>
      <input type="checkbox" id={'toggle'}/>
      <label htmlFor={'toggle'}>
        <FontAwesomeIcon color={'white'} className={'nav__icon'} icon={faBars}/>
      </label>
      <div className={'nav__menu'}>
        <label id="nav__close" htmlFor={'toggle'}>
          <FontAwesomeIcon color={'white'} fontSize={'32px'} icon={faClose}/>
        </label>
        <h2>Main Menu</h2>
        <ul id={'nav-list'} className={'nav__list'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
        <h2>My Account</h2>
        <ul className={'nav__list'}>
          <li><Link to="/">Log In</Link></li>
          <li><Link to="/r">Create Account</Link></li>
        </ul>
      </div>
    </div>
  );
};
