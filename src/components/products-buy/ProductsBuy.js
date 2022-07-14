import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/actions';
import './ProductsBuy.css';

export const ProductsBuy = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducer.productData);
  const isProductInCart = useMemo(() => items.some(res => res.product.id === product.id), [product.id, items]);

  const handleClick = useCallback((e) => {
    if (isProductInCart) {
      return alert('Added');
    } else {
      dispatch(addProductToCart(product, product.id));
    }
  }, [dispatch, isProductInCart, product]);

  return (
    <button className={'products__button'} onClick={handleClick}>Add to cart</button>
  );
};
