import React from 'react';
import '../../pages/categories-page/Categories.css';
import { ProductsBuy } from '../products-buy/ProductsBuy';
import './ProductsCarts.css';

export const ProductsCarts = ({ item }) => {
  return (
    <div className={'products__carts'}>
      <img className={'products__carts__img'} src={item.img[0]} alt=""/>
      <div className={'products__carts__name'}>
        {item.name}
      </div>
      <div className={'products__carts__price'}>
        <div>{item.price} $</div>
        <ProductsBuy item={item}/>
      </div>
      <div className={'products__carts__info'}>
        {item.info}
      </div>
    </div>
  );
};
