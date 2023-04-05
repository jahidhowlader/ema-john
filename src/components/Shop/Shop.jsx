import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import { clearCart, getShoppingList, setLocalStorage } from '../../../utilities/initialDB';
import OrderSummary from '../Order/OrderSummary';
import { addToDb } from '../../../utilities/fakedb';


const Shop = () => {

    // load data from products.json
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data);
        }
        loadData()
    }, [])

    // get product from products.json by id
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storeCart = getShoppingList()

        const savedProduct = []
        for (const id in storeCart) {
            const singleProduct = products.find(product => product.id === id)

            if (singleProduct) {
                const quantity = storeCart[id]
                singleProduct.quantity = quantity
                savedProduct.push(singleProduct)
            }
        }

        setCart(savedProduct)

    }, [products])
    
    // Click to add product and set local storage
    const addToCart = (product) => {

        const newCart = [...cart, product]
        setCart(newCart)
        setLocalStorage(product.id)
    }

    // click to remove all item from cart
    const removeProducts = _ => {
        const removeProducts = clearCart()
        setCart([])
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
                <OrderSummary 
                cart={cart}
                removeProducts={removeProducts}
                ></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;