import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './CartBlock.css';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/CartMenu';
import { ItemsInCart } from '../items-in-cart/ItemsInCart';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cartReducer.cart);

  // console.log(items);

  return (
    <div className={'cart__block'}>
      <ItemsInCart quantity={items.length}/>
      <FontAwesomeIcon cursor={'pointer'} color={'white'} fontSize={'32px'} icon={faShoppingCart}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {isCartMenuVisible && <CartMenu onClick={() => null}/>}
    </div>
  );
};
