import React from 'react';
import { Link } from 'react-router-dom';
import Gucci from '../../images/block/gucci.jpg';
import Puma from '../../images/block/puma4.jpg';
import Smile from '../../images/block/smile.jpg';
import Balmain from '../../images/block/balmain.jpg';
import Cards from '../../images/block/photos_desktop.png';
import './Main.css';

function Main () {
  return (
    <div>
      <div className={'intro'}>
        <div className={'intro__shop'}>
          <div>
            <p>by Just PROMAX</p>
            <Link className={'intro__shop__button'} to="/categories">Shop now</Link>
            <div id={'intro__shop_id'}></div>
          </div>
        </div>
      </div>

      <div className={'container first'}>
        <div className={'container__inner'}>
          <div className={'container__body'} id={'gucci'}>
            <div>
              <p>GUCCI</p>
              <Link className={'container__button'} to={'/categories'}>Shop Now</Link>
            </div>
            <img src={Gucci} alt=""/>
          </div>
        </div>
        <div className={'container__inner con-two'}>
          <div className={'container__body'}>
            <div>
              <p>PUMA</p>
              <Link className={'container__button'} to={'/categories'}>Shop Now</Link>
            </div>
            <img width={'120%'} src={Puma} alt=""/>
          </div>
        </div>
      </div>
      <div className={'container second'}>
        <div className={'container__inner con-three'}>
          <div className={'container__body'}>
            <div>
              <p>SMILE</p>
              <Link className={'container__button'} to={'/categories'}>Shop Now</Link>
            </div>
            <img src={Smile} alt=""/>
          </div>
        </div>
        <div className={'container__inner'}>
          <div className={'container__body'}>
            <div>
              <p>BALMAIN</p>
              <Link className={'container__button'} to={'/categories'}>Shop Now</Link>
            </div>
            <img src={Balmain} alt=""/>
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
        <div className={'body__img'}>
          <img src={Cards} alt=""/>
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
    </div>
  );
}

export default Main;
