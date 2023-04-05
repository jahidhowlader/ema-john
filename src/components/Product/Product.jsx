import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props);

    const {img, name, price, seller, ratings, id, shipping} = props.product

    return (
        <div className='border border-border-clr rounded-lg relative '>
            <div className='p-2'>
                <img className='rounded-lg mb-5' src={img} alt="" />
                <h6 className='font-bold'>{name}</h6>
                <p className='font-bold'>Price: ${price} (<span className='text-secondary text-xs font-bold'>Shipping: ${shipping}</span>)</p>
                
                <br />
                <p className='text-text-secondary text-xs'>Manufacturer: {seller}</p>
                <p className='text-text-secondary text-xs pb-12'>Rating: {ratings}</p>
            </div>

            <div className='absolute bottom-0 w-full bg-cart hover:bg-secondary text-center rounded-b-lg'>
                <button onClick={() => props.addToCart(props.product)} className='py-3'>
                    Add to cart
                    <FontAwesomeIcon className='pl-3' icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
};

export default Product;