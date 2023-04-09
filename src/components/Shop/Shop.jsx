import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import { clearCart, getShoppingList, setLocalStorage } from '../../../utilities/initialDB';
import OrderSummary from '../Order/OrderSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

    const handleClearCart = _ => {
        setCart([])
        clearCart()
    }

    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5'>

            <div className='md:col-span-3 lg:col-span-4'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 m-14'>
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
                    handleClearCart={handleClearCart}
                >
                    <Link to='/order'>
                        <button className='bg-secondary w-full text-white mt-4 py-3 rounded-lg'>
                            Review Order
                            <FontAwesomeIcon className='pl-3' icon={faArrowRight} />
                        </button>
                    </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default Shop;