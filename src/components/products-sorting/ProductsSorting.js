import React from "react";
import {useState} from "react";
import {ProductsBlock} from "../products-blocks/ProductsBlock";
import Products from "../products/Products";
import Search from "../../images/icons/search-line.svg";

export const ProductsSorting = () => {

    const [search, setSearch] = useState('');
    const [state, setState] = useState(Products);

    function selectGoods(event) {
        let value = event.target.value
        if (value === '3') {
            let element = state.sort((a, b) => {
                if (a["price"] > b["price"]) return -1
            })
            setState(element.map(item => item))
        } else if (value === '2') {
            let element = state.sort((a, b) => {
                if (a["price"] < b["price"]) return -1
            })
            setState(element.map(item => item))
        } else if (value === '1') {
            let element = state.sort((a, b) => {
                if (a["id"] < b["id"]) return -1
            })
            setState(element.map(item => item))
        }
    }

    const filteredName = state.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className={'products__sorting'}>
                <div>
                    <div className={'products__form'}>
                        <form>
                            <img src={Search} alt=""/>
                            <input type="search" style={{color: "purple"}} placeholder={'Search'}
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
    )
}