import React, { useCallback, useMemo, useState } from 'react';
import Search from '../../images/icons/search-line.svg';
import Products from '../../storage/products/Products';
import { ProductsCards } from '../product-cards/ProductCards';
import './ProductSorting.css';

export const ProductSorting = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(Products);

  const selectGoods = useCallback((event) => {
    const value = event.target.value;

    setProducts(() => {
      let elements;
      if (value === '3') {
        elements = products.sort((a, b) => {
          if (a.price > b.price) return -1;
          return 1;
        });
      } else if (value === '2') {
        elements = products.sort((a, b) => {
          if (a.price < b.price) return -1;
          return 1;
        });
      } else if (value === '1') {
        elements = products.sort((a, b) => {
          if (a.id < b.id) return -1;
          return 1;
        });
      }

      return [...elements];
    });
  }, [products]);

  const filteredName = useMemo(() => products.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  }), [products, search]);

  const handleSearch = useCallback((event) => setSearch(event.target.value), []);

  return (
    <div className={'products__inner'}>
      <div className={'products__sorting'}>
        <div className={'products__form'}>
          <form>
            <img src={Search} alt=""/>
            <input maxLength={30} type="search" placeholder={'Search'} onChange={handleSearch}/>
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
      <div className={'products__goods'}>
        {filteredName.map(res => <ProductsCards productCards={res} key={res.id}/>)}
      </div>
    </div>
  );
};
