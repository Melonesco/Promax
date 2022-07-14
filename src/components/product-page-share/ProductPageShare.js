import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import './ProductPageShare.css';

export const ProductPageShare = () => {
  return (
    <div className={'product__page__share'}>
      <FontAwesomeIcon fontSize={'14px'} icon={faShareNodes}/>
      <p>share</p>
    </div>
  );
};
