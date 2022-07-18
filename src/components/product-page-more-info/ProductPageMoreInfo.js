import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faBox, faCommentDollar, faEnvelopeOpenText, faWallet } from '@fortawesome/free-solid-svg-icons';
import './ProductPageMoreInfo.css';

const ProductPageMoreInfo = () => {
  return (
    <div className={'product__page__more__info'}>
      <div className={'product__page__payment'}>
        <h2>Payment</h2>
        <div>
          <div className={'product__page__payment__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faPaypal}/>
            <p>PayPal</p>
          </div>
          <div className={'product__page__payment__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faCcVisa}/>
            <p>Visa</p>
          </div>
          <div className={'product__page__payment__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faBitcoin}/>
            <p>Bitcoin</p>
          </div>
          <div className={'product__page__payment__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faWallet}/>
            <p>Cash on receipt</p>
          </div>
        </div>
      </div>
      <div className={'product__page__guarantee'}>
        <h2>Guarantee</h2>
        <div>
          <div className={'product__page__guarantee__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faBox}/>
            <p>We will refund money if the goods are not delivered within 30 days after payment. You have 2
                            weeks to apply for a refund.</p>
          </div>
          <div className={'product__page__guarantee__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faEnvelopeOpenText}/>
            <p>Does the product not match the description? Email us within 30 days of receipt!</p>
          </div>
          <div className={'product__page__guarantee__list'}>
            <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faCommentDollar}/>
            <p>In case of cancellation, the money will be credited to the account within 14 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageMoreInfo;
