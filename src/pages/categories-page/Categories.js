import './Categories.css'
import React, {useState} from "react";
import Products from "../../components/products/Products";
import Search from '../../images/icons/search-line.svg';
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {type} from "@testing-library/user-event/dist/type";

function Categories(){

    const elementSorting = [
        { value: 'Standard', label: 'Standard' },
        { value: 'Від найменшого до найбільшого', label: 'Від найменшого до найбільшого' },
        { value: 'Від найбільшого до найменшого', label: 'Від найбільшого до найменшого' },
    ]


    let list = Products.data



    const [something, setValue] = useState('')
    const [state, setState] = useState([...list])


    function myFunction({value}) {
        if (value === 'Від найменшого до найбільшого') {
            let element = state.sort((a,b) => {
                if (a["price"] < b["price"]) return -1
            })
            let filteredName = element.filter(item =>{
                return item.name.toLowerCase().includes(something.toLowerCase())
            })
            setState(filteredName)
        } else if (value === 'Від найбільшого до найменшого') {
            let element = state.sort((a,b) => {
                if (a["price"] > b["price"]) return -1
            })
            setState(element.map(item => item))
        } else if (value === 'Standard') {
            let element = state.sort((a,b) => {
                if (a["id"] < b["id"]) return -1
            })
            setState(element.map(item => item))
        }
    }

    const filteredName = state.filter(item =>{
        return item.name.toLowerCase().includes(something.toLowerCase())
    })




    const block = filteredName.map(item =>
        <a key={item.id} href={`/categories/${item.id}`} type={item.price} className={'products__block'}>
            <img width={'70%'}  style={{display: "block", margin: '0 auto'}} src={item.img[0]} alt=""/>
            <div className={'products__block__name'}>{item.name}</div>
            <div className={'products__block__price'}>{item.price} $</div>
            <div className={'products__block__info'}>{item.info}</div>
        </a>)

    return(
        <>
            <div className={'products'}>
                <div>
                    <div className={'products__sorting'}>
                        <div className={'products__form'}>
                            <form>
                                <img src={Search} alt=""/>
                                {/*<FontAwesomeIcon color={'black'} icon={faSearch}/>*/}
                                <input type="search" style={{color: "purple"}} placeholder={'Search'} onChange={(event) => setValue(event.target.value)}/>
                            </form>
                        </div>

                        <div className={'products__select'}>
                                <Select className={'products__select__inner'} defaultValue={elementSorting.filter(item => item.value === 'Standard')} options={elementSorting} onChange={myFunction}/>
                        </div>

                    </div>
                    <div className={'products__inner'}>
                        {block}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;