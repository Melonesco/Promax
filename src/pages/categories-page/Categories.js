import './Categories.css';
import React from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import {type} from "@testing-library/user-event/dist/type";
import { ProductsSorting } from '../../components/products-sorting/ProductsSorting';
import Wave from '../../images/backgrounds/wave.svg';

function Categories () {
  return (
    <div className={'products'}>
      <div className={'products__wave'}>
        <img id={'wave'} src={Wave} alt=""/>
      </div>
      <ProductsSorting/>
    </div>
  );
}

export default Categories;
