import './Categories.css';
import React from 'react';
import { VideoBg } from '../../components/video-bg/VideoBg';
import { ProductSorting } from '../../components/product-sorting/ProductSorting';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import {type} from "@testing-library/user-event/dist/type";

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
