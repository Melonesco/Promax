import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { CartProductDelete } from '../cart-product-delete/CartProductDelete';
import './CartMenu.css';

export const CartMenu = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const totalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.product.price, 0), [cart]);

  return (
    <div className={'cart__menu'}>
      <div className={'cart__menu__items__list'}>
        {cart.length > 0
          ? cart.map(item => (
            <div key={item.id} className={'cart__menu__items'}>
              <div className={'cart__menu__names'}>
                <CartProductDelete data={item}/>
                <div>{item.product.name}</div>
              </div>
              <div>{item.product.price}</div>
            </div>
          ))
          : 'Empty'}
      </div>
      {cart.length > 0 && (
        <div className={'cart__menu__arrange'}>
          {totalPrice}
        </div>
      )}
    </div>
  );
};
