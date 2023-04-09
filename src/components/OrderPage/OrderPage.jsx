import React, { useState } from 'react';
import OrderSummary from '../Order/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import cartProductsLoader from '../../loader/cartProductsLoader';
import ReviewItem from '../ReviewItem.jsx/ReviewItem';
import { clearCart, removeFromDb } from '../../../utilities/initialDB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const OrderPage = () => {

    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const HandlerRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = _ => {
        setCart([])
        clearCart()
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
                    handleClearCart={handleClearCart}
                >
                    <Link to='/checkout'>
                        <button className='bg-secondary w-full text-white mt-4 py-3 rounded-lg'>
                            Proceed Checkout
                            <FontAwesomeIcon className='pl-3' icon={faCreditCard} />
                        </button>
                    </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default OrderPage;