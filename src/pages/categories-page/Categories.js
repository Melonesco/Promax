import './Categories.css'
import React from "react";
import {Link} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import {type} from "@testing-library/user-event/dist/type";
import {ProductsSorting} from "../../components/products-sorting/ProductsSorting";


function Categories() {
    return (
        <div className={'products'}>
            <div className={'products__inner'}>
                <ProductsSorting/>
            </div>
        </div>
    )
}

export default Categories;