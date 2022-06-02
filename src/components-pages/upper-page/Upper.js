import './Upper.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function Upper() {
    return (
        <>
            <div className={"upper"}>
                <div className={"upper__block"}>
                    <div className={"upper__block__local"}>
                        <h2>Location <span>Ukraine</span></h2>
                    </div>
                    <div className={"upper__block__info"}>
                        <a href="#"><h2>SALE 40% on this productions</h2></a>
                    </div>
                    <div className={"upper__block__connect"}>
                        <h2>Content</h2>
                        <a href="https://facebook.com"><FontAwesomeIcon  className={'social'} icon={faFacebook} /></a>
                        <a href="https://instagram.com"><FontAwesomeIcon  className={'social'} icon={faInstagram} /></a>
                        <a href="https://twitter.com"><FontAwesomeIcon  className={'social'} icon={faTwitter} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upper;