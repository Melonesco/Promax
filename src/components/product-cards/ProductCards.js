import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductsBuy } from '../products-buy/ProductsBuy';
import { currentProduct } from '../../redux/actions';
import './ProductCards.css';

export const ProductsCards = ({ productCards }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(currentProduct(productCards));
    navigate(`/${productCards.type}/${productCards.name}`);
  }, [dispatch, navigate, productCards]);

  return (
    <div className={'products__carts'} onClick={handleClick}>
      <img className={'products__carts__img'} src={productCards.img[0]} alt=""/>
      <div className={'products__carts__name'}>
        {productCards.name}
      </div>
      <div className={'products__carts__price'}>
        <div>{productCards.price} $</div>
        <ProductsBuy product={productCards}/>
      </div>
    </div>
  );
};
