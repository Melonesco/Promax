import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer () {
  return (
    <footer>
      <div className={'footer'}>
        <div className={'footer__inner'}>
          <div className={'footer__info'}>
            <div>
              <h2>Navigation</h2>
              <Link to="/">Search</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Returns</Link>
            </div>
            <div>
              <h2>Legal</h2>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Refund policy</Link>
            </div>
            <div className={'footer__connect'}>
              <h2>Connect</h2>
              <a href="https://facebook.com">
                <FontAwesomeIcon className={'social'} icon={faFacebook}/> Facebook
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon className={'social'} icon={faInstagram}/> Instagram
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon className={'social'} icon={faTwitter}/> Twitter
              </a>
            </div>
          </div>
          <div className={'footer__exclusive'}>
            <h2>Exclusive sales and promotions</h2>
            <p>Get access exclusive sales and promotions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
