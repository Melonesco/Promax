import React from "react";
import {Link} from "react-router-dom";
import '../../pages/categories-page/Categories.css'

export const ProductsBlock = ({item}) => {
    return (
        <div className={'products__block'}>
            <img width={'70%'} style={{display: "block", margin: '0 auto'}} src={item.img[0]} alt=""/>
            <div className={'products__block__name'}>
                {item.name}
            </div>
            <div className={'products__block__price'}>
                {item.price} $
            </div>
            <div className={'products__block__info'}>
                {item.info}
            </div>
        </div>
    )
}


