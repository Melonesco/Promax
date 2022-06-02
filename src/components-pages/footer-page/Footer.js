import './Footer.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <>
            <footer>
                <div className={"footer"}>
                    <div className={"footer__inner"}>
                        <div className={"footer__info"}>
                            <div>
                                <h2>Navigation</h2>
                                <a href="/">Search</a>
                                <a href="/">Contact Us</a>
                                <a href="/">Returns</a>
                            </div>
                            <div>
                                <h2>Legal</h2>
                                <a href="/">Privacy Policy</a>
                                <a href="/">Terms of Service</a>
                                <a href="/">Refund policy</a>
                            </div>
                            <div className={"footer__connect"}>
                                <h2>Connect</h2>
                                <a href="https://facebook.com"><FontAwesomeIcon  className={'social'} icon={faFacebook} /> Facebook</a>
                                <a href="https://instagram.com"><FontAwesomeIcon  className={'social'} icon={faInstagram} /> Instagram</a>
                                <a href="https://twitter.com"><FontAwesomeIcon  className={'social'} icon={faTwitter} /> Twitter</a>
                            </div>
                        </div>
                        <div>
                            <h2>Exclusive sales and promotions</h2>
                            <p>Get access exclusive sales and promotions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;