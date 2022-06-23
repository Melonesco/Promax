import React, { useState } from 'react';
import { ProductsBlock } from '../products-blocks/ProductsBlock';
import Products from '../products/Products';
import Search from '../../images/icons/search-line.svg';

export const ProductsSorting = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(Products);

  function selectGoods (event) {
    const value = event.target.value;
    if (value === '3') {
      const element = products.sort((a, b) => {
        if (a.price > b.price) return -1;
      });
      setProducts(element.map(item => item));
    } else if (value === '2') {
      const element = products.sort((a, b) => {
        if (a.price < b.price) return -1;
      });
      setProducts(element.map(item => item));
    } else if (value === '1') {
      const element = products.sort((a, b) => {
        if (a.id < b.id) return -1;
      });
      setProducts(element.map(item => item));
    }
  }

  const filteredName = products.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className={'products__sorting'}>
        <div>
          <div className={'products__form'}>
            <form>
              <img src={Search} alt=""/>
              <input type="search" style={{ color: 'purple' }} placeholder={'Search'}
                onChange={(event) => setSearch(event.target.value)}/>
            </form>
          </div>
          <div className={'products__select'}>
            <select onChange={selectGoods}>
              <option value="1">Стандарт</option>
              <option value="2">Від найменшого до найбільшого</option>
              <option value="3">Від найбільшого до найменшого</option>
            </select>
          </div>
        </div>
      </div>
      <div className={'products__goods'}>
        {filteredName.map(item => <ProductsBlock item={item} key={item.id}/>)}
      </div>
    </>
  );
};
