import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { clearCart } from '../../../utilities/initialDB';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cart, handleClearCart, children}) => {

    let seletedItem = 0
    let totalPrice = 0
    let shippingCharge = 0

    for (const product of cart) {

        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity
        shippingCharge = shippingCharge + (product.shipping * product.quantity)
        seletedItem = seletedItem + product.quantity
    }

    const tax = totalPrice * .07
    const grandTotal = totalPrice + shippingCharge + tax

    return (
        <div className='bg-cart h-full relative p-5 order-summary'>
            <div className='sticky top-0'>
                <h5 className='text-2xl text-center py-7 text-bold'>Order Summary</h5>
                <p>Selected Items: {seletedItem}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-2xl'>Grand Total: ${grandTotal.toFixed(2)}</h6>

                <button onClick={handleClearCart} className='bg-red w-full text-white mt-12 py-3 rounded-lg'>Clear Cart
                    <FontAwesomeIcon className='pl-3' icon={faTrashCan} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default OrderSummary;