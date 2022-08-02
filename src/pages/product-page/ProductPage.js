import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductPageWishlist } from '../../components/product-page-wishlist/ProductPageWishlist';
import { ProductPageShare } from '../../components/product-page-share/ProductPageShare';
import { ProductPageSize } from '../../components/product-page-size/ProductPageSize';
import ProductPageButton from '../../components/product-page-button/ProductPageButton';
import ProductDelivery from '../../components/product-delivery/ProductDelivery';
import ProductPageDescription from '../../components/productPageDescription/ProductPageDescription';
import ProductPageMoreInfo from '../../components/product-page-more-info/ProductPageMoreInfo';
import './ProductPage.css';

export const ProductPage = ({ products }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => setProduct(...products.filter(res => res.id === Number(id))), [id, products]);

  return (
    <div className={'product__page'}>
      <div>
        <div className={'product__page__blocks'}>
          <div className={'product__page__img'}>
            <img src={product?.images[0]} alt=""/>
          </div>
          <div className={'product__page__block'}>
            <p className={'product__page__name'}>{product?.name}</p>
            <div className={'product__page__info'}>
              <p>
                {product?.info}
              </p>
              <div className={'product__page__social'}>
                <ProductPageWishlist/>
                <ProductPageShare/>
              </div>
            </div>
            <ProductPageSize product={product}/>
            <div className={'product__page__price'}>
              <p>
                {product?.price} $
              </p>
              <ProductPageButton product={product}/>
            </div>
            <ProductDelivery/>
          </div>
        </div>
        <div className={'product__page__blocks'}>
          <ProductPageDescription/>
          <ProductPageMoreInfo/>
        </div>
      </div>
    </div>
  );
};
