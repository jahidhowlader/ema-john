import React from 'react';
import './orderSummary.css'

const OrderSummary = () => {
    return (
        <div className='bg-cart h-full relative p-5 order-summary'>
            <div className='sticky top-0'>
            <h5 className='text-2xl text-center py-7 '>Order Summary</h5>
            <p>Selected Items: 6</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h6 className='text-2xl'>Grand Total: $1559</h6>

            <button>Clear Cart</button>
            <button></button>
            </div>
        </div>
    );
};

export default OrderSummary;