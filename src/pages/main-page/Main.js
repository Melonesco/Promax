import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Carts from '../../images/block/photos_desktop.png';

function Main () {
  return (
    <>
      <div className={'intro'}>
        <div className={'intro__shop'}>
          <div>
            <p>by Just PROMAX</p>
            <Link to="/categories">Shop now</Link>
            <div id={'intro__shop_id'}></div>
          </div>
        </div>
      </div>

      <div id="first" className={'container'}>
        <div className={'container__inner'}>
          <div className={'container__one'}>
            <div>
              <p>GUCCI</p>
              <Link className={'container__buttons'} to="/categories">Shop Now</Link>
            </div>
          </div>
        </div>
        <div id={'container__inner-two'} className={'container__inner'}>
          <div className={'container__two'}>
            <div>
              <p>Puma</p>
              <Link className={'container__buttons'} to="/categories">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div id={'second'} className={'container'}>
        <div id={'container__inner-three'} className={'container__inner'}>
          <div className={'container__three'}>
            <div>
              <p>Smile</p>
              <Link className={'container__buttons'} to="/categories">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className={'container__inner'}>
          <div className={'container__four'}>
            <div>
              <p>Balmain</p>
              <Link className={'container__buttons'} to="/categories">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={'box'}>
        <div className={'box__inner'}>
          <div id={'box__img-1'}></div>
          <div id={'box__img-2'}></div>
          <div id={'box__img-3'}></div>
        </div>
      </div>

      <div className={'body'}>
        <div className={'body__info'}>
          <h2>Welcome to PROMAX</h2>
          <p>You can buy branded and high quality T-shirts in the <b>PROMAX</b> store. We work and try for
                        you.</p>
        </div>
        <div>
          <img src={Carts} alt=""/>
        </div>
      </div>

      <div className={'content'}>
        <div>
          <h2>Subscribe To Our Newsletter</h2>
          <p>Subscribe to our newsletter to get a 10% discount on your first order!</p>
          <div>
            <input id={'myinput'} type="text" placeholder="Email Address" onChange={() => null}/>
            <button onClick={() => null}>Subscribe To Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
