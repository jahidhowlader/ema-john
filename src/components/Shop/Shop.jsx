import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import { getShoppingList, setLocalStorage } from '../../../utilities/initialDB';
import OrderSummary from '../Order/OrderSummary';


const Shop = () => {

    const [products, setProducts] = useState([]) 
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data);
        }
        loadData()
    }, [])
    
    const [cart, setCart] = useState([])
    const updateSelectiveProduct = getShoppingList()
    useEffect(() => {
        const cartListFromLocalStorage = getShoppingList()

        let totalproductList = []

        for (const id in cartListFromLocalStorage) {

            const selectedProduct = products.find(product => product.id === id)
            if(selectedProduct){
                selectedProduct.quantity = cartListFromLocalStorage[id]
            }

            totalproductList.push(selectedProduct)
        }
        setCart(totalproductList)

    }, [products, updateSelectiveProduct])

    const addToCart = (id) => {

        setLocalStorage(id)
    }

    return (
        <div className='grid grid-cols-5'>

            <div className='col-span-4'>
                <div className='grid grid-cols-3 gap-12 m-14'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>

            <div>
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;