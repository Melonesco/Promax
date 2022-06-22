import './Page.css';
import React from "react";
import Categories from "../categories-page/Categories";
import Products from "../../components/products/Products";


class Page extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <>
                <div className={'page'}>
                    <div></div>
                </div>
            </>
        )
    }
}

export default Page