import React, { useState } from 'react';
import './ProductPageSize.css';

export const ProductPageSize = ({ product }) => {
  const [size, setSize] = useState(product.size[0]);

  const handleClick = (size) => {
    setSize(size);
  };

  return (
    <div>
      <div className={'product__page__size'}>
        <p>Size {size}</p>
      </div>
      <div className={'product__page__size__list'}>
        <ul>
          {product.size.map((item, i) => <li key={i} onClick={() => handleClick(item)}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};
