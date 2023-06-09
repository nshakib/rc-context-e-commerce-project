import React, { useEffect, useContext } from 'react'
import Banner from "./Banner/Banner";

import "./Home.scss";
import Products from '../Products/Products';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';
import Category from './Category/Category';


const Home = () => {
const {categories, setCategories, products, setProducts} = useContext(Context);

    useEffect(() =>{

        getProducts();
        getCategories();
    }, [])

const getProducts = () =>{
    fetchDataFromApi("/api/products?populate=*").then((res) => {
        console.log(res)
        setProducts(res);
    });
}

const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
        setCategories(res);
    });
};

    return <div className="home">
        <Banner />
        <div className='main-content'>
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} 
                headingText="Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;
