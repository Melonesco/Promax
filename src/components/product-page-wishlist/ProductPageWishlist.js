import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductPageWishlist.css';

export const ProductPageWishlist = () => {
  return (
    <div className={'product__page__wishlist'}>
      <FontAwesomeIcon icon={faHeart}/>
      <p>wishlist</p>
    </div>
  );
};
