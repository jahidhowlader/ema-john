import React, { useEffect, useState } from 'react';
import { addToDB } from '../../../utilities/initialDB';
import OrderSummary from '../Order/OrderSummary';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart ] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
        addToDB(product.id)
        // console.log(product.id);
    }

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 my-12'>
                <div className='grid grid-cols-3 gap-11 mx-28'>
                {
                products.map(product => <Product key={product.id} product={product} addToCart = {addToCart}></Product>
                )
            }
                </div>
            </div>
            <div className=''>
                <OrderSummary>{cart}</OrderSummary>
            </div>
            
        </div>
    );
};

export default Shop;