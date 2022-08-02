import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/actions';
import './ProductPageButton.css';

const ProductPageButton = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducer.productData);

  const handleClick = () => {
    const isProductInCart = items.some(res => res.product.id === product.id);
    return isProductInCart ? null : dispatch(addProductToCart(product, product.id));

    // return (product.id) ? console.log(1) : console.log(2);
  };

  return (
    <div>
      <button className={'product__page__button'} onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default ProductPageButton;
