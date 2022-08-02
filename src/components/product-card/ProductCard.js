import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export const ProductsCard = ({ productCard }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(`/product/${productCard.id}`), [navigate, productCard]);

  return (
    <div className={'products__carts'} onClick={handleClick}>
      <img className={'products__carts__img'} src={productCard.images[0]} alt=""/>
      <div className={'products__carts__name'}>
        {productCard.name}
      </div>
      <div className={'products__carts__price'}>
        <div>{productCard.price} $</div>
      </div>
    </div>
  );
};
