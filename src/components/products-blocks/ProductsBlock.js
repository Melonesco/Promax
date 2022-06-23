import React from 'react';
import '../../pages/categories-page/Categories.css';
import { ProductsBuy } from '../products-buy/ProductsBuy';

export const ProductsBlock = ({ item }) => {
  return (
    <div className={'products__block'}>
      <img width={'70%'} style={{ display: 'block', margin: '0 auto' }} src={item.img[0]} alt=""/>
      <div className={'products__block__name'}>
        {item.name}
      </div>
      <div className={'products__block__price'}>
        <div>{item.price} $</div>
        <ProductsBuy/>
      </div>
      <div className={'products__block__info'}>
        {item.info}
      </div>
    </div>
  );
};
