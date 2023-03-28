import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './orderSummary.css'

const OrderSummary = (props) => {

    let totalPrice = 0;
    let shippingPrice = 0;

    for (let product of props.children) {
        totalPrice += product.price
        shippingPrice += product.shipping
    }

    const tax = totalPrice * .07
    const grandTotal = tax + totalPrice + shippingPrice

    return (
        <div className='bg-cart h-full relative p-5 order-summary'>
            <div className='sticky top-0'>
                <h5 className='text-2xl text-center py-7 text-bold'>Order Summary</h5>
                <p>Selected Items: {props.children.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingPrice}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-2xl'>Grand Total: ${grandTotal.toFixed(2)}</h6>

                <button className='bg-red w-full text-white mt-12 py-3 rounded-lg'>Clear Cart
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