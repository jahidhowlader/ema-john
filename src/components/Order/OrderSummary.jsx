import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './orderSummary.css'

const OrderSummary = (props) => {

    const totalPrice = props.children.map(price => price.price).reduce((privious, current) => privious + current, 0)

    let shippingCharge;

    if (totalPrice == 0) {
        shippingCharge = 0
    }else if (totalPrice < 1000) {
        shippingCharge = 5
    } else if (totalPrice < 10000) {
        shippingCharge = 30
    } else if (totalPrice > 10000) {
        shippingCharge = 50
    }

    const tax = totalPrice * .07
    const grandTotal = tax + totalPrice + shippingCharge



    console.log(tax);

    return (
        <div className='bg-cart h-full relative p-5 order-summary'>
            <div className='sticky top-0'>
                <h5 className='text-2xl text-center py-7 text-bold'>Order Summary</h5>
                <p>Selected Items: {props.children.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge.toFixed(2)}</p>
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