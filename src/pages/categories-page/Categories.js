import React from 'react';
import { VideoBg } from '../../components/video-bg/VideoBg';
import { ProductSorting } from '../../components/product-sorting/ProductSorting';
import './Categories.css';

function Categories () {
  return (
    <div className={'products'}>
      <div className={'products__img'}>
        <VideoBg/>
      </div>
      <div className={'products__all'}>
        <ProductSorting/>
      </div>
    </div>
  );
}

export default Categories;
