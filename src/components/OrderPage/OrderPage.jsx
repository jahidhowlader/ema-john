import React, { useState } from 'react';
import OrderSummary from '../Order/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import cartProductsLoader from '../../loader/cartProductsLoader';
import ReviewItem from '../ReviewItem.jsx/ReviewItem';
import { removeFromDb } from '../../../utilities/initialDB';

const OrderPage = () => {

    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const HandlerRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5'>

            <div className='md:col-span-3 lg:col-span-4 mx-auto mt-12'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        HandlerRemoveFromCart={HandlerRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>

            <div>
                <OrderSummary
                    cart={cart}
                    removeProducts={[]}
                ></OrderSummary>
            </div>
        </div>
    );
};

export default OrderPage;