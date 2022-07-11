import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './CartBlock.css';
import { CartMenu } from '../cart-menu/CartMenu';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  return (
    <div className={'cart__block'}>
      <FontAwesomeIcon cursor={'pointer'} color={'white'} fontSize={'32px'} icon={faShoppingCart}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {isCartMenuVisible && <CartMenu onClick={() => null}/>}
    </div>
  );
};
