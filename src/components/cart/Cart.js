import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartMenu } from '../cart-menu/CartMenu';
import { ItemsInCart } from '../items-in-cart/ItemsInCart';
import './Cart.css';

export const Cart = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cartReducer.productData);

  return (
    <div className={'cart'}>
      <ItemsInCart quantity={items.length}/>
      <FontAwesomeIcon
        className={'cart__icon'}
        icon={faShoppingCart}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {isCartMenuVisible && <CartMenu onClick={() => null}/>}
    </div>
  );
};
