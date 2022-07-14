import React from 'react';
import { useSelector } from 'react-redux';
import './ProductPage.css';
import { ProductPageShare } from '../../components/product-page-share/ProductPageShare';
import { ProductPageWishlist } from '../../components/product-page-wishlist/ProductPageWishlist';
import { ProductPageSize } from '../../components/product-page-size/ProductPageSize';

export const ProductPage = () => {
  const product = useSelector(state => state.productCurrentReducer.productCurrent.item);

  return (
    <div className={'product__page'}>
      <div>
        <div className={'product__page__blocks'}>
          <div className={'product__page__img'}>
            <img src={product.img[0]} alt=""/>
          </div>
          <div className={'product__page__block'}>
            <p className={'product__page__name'}>{product.name}</p>
            <div className={'product__page__info'}>
              <p>
                {product.info}
              </p>
              <div className={'product__page__social'}>
                <ProductPageWishlist/>
                <ProductPageShare/>
              </div>
            </div>
            <ProductPageSize product={product}/>
            <p className={'product__page__price'}>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
