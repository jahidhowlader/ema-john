import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './orderSummary.css'
import { deleteShoppingCart } from '../../../utilities/fakedb';

const OrderSummary = (props) => {
    console.log(props.children);

    let quantity = 0
    let totalPrice = 0
    let totalShipping = 0

    for(const product of props.children){
        quantity += product.quantity
        totalPrice += product.price * product.quantity
        totalShipping += product.totalShipping * product.quantity
        
        console.log(totalPrice);
        // console.log(product);
    }

    const tax = totalPrice * .07
    const grandTotal = totalPrice + tax

    return (
        <div className='bg-cart h-full relative p-5 order-summary'>
            <div className='sticky top-0'>
                <h5 className='text-2xl text-center py-7 text-bold'>Order Summary</h5>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-2xl'>Grand Total: ${grandTotal.toFixed(2)}</h6>

                <button onClick={deleteShoppingCart} className='bg-red w-full text-white mt-12 py-3 rounded-lg'>Clear Cart
                    <FontAwesomeIcon className='pl-3' icon={faTrashCan} />
                </button>
                <button className='bg-secondary w-full text-white mt-4 py-3 rounded-lg'>
                    Proceed Checkout
                    <FontAwesomeIcon className='pl-3' icon={faCreditCard} />
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;