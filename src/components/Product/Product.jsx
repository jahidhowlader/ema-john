import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './product.css'


const Product = (props) => {
    const { img, name, ratings, seller, price, id } = props.product

    const addToCart = props.addToCart

    return (
        <div className='border border-border-clr rounded-lg relative'>
            <div className=' p-2 '>
                <img className='rounded-lg' src={img} alt="" />
                <h6 className=' text-text-primary text-lg font pt-2'>{name}</h6>
                <p className='text-text-primary pb-5'>Price: ${price}</p>

                <p className='text-text-secondary text-xs'>Manufacturer: {seller}</p>
                <p className='text-text-secondary text-xs pb-12'>Rating: {ratings}</p>
            </div>
            <div className='absolute bottom-0 w-full bg-cart hover:bg-secondary text-center rounded-b-lg'>
                <button onClick={() => addToCart(props.product)} className='py-3'>
                    Add to cart
                    <FontAwesomeIcon className='pl-3' icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
};


export default Product;