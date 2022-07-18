import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentDots, faTruck } from '@fortawesome/free-solid-svg-icons';
import './ProductDelivery.css';

const ProductDelivery = () => {
  return (
    <div className={'product__page__delivery'}>
      <h2>Delivery</h2>
      <div className={'product__page__delivery__info'}>
        <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faTruck}/>
        <p>Sending by Nova Poshta is now possible to a limited number of branches.</p>
      </div>
      <div className={'product__page__delivery__info'}>
        <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faClock}/>
        <p>Shipping can currently take to 14 business days.</p>
      </div>
      <div className={'product__page__delivery__info'}>
        <FontAwesomeIcon className={'product__page__delivery__icons'} icon={faCommentDots}/>
        <p>For each order, we specify the possibility of sending.</p>
      </div>
    </div>
  );
};

export default ProductDelivery;
