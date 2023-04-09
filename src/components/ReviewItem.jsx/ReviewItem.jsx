import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ReviewItem = ({ product , HandlerRemoveFromCart}) => {

    const { img, shipping, price, name , id} = product
    // console.log(product);

    return (
        <div className='flex border border-border-clr m-5 p-2 rounded-lg w-[570px] items-center justify-between'>
            <div className='flex items-center'>
                <div>
                    <img className='img-fluid w-[100px] h-[100px] mr-3' src={img} alt="" />
                </div>
                <div className='w-80'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p>Price: <span className='text-secondary'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-secondary'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={() => HandlerRemoveFromCart(id)} className='bg-red text-center rounded-full flex p-3 mr-2 bg-opacity-20'>
                <FontAwesomeIcon className='text-red text-xl' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;