import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Reviewitem = ({product , handleRemoveFromCart}) => {
    const {img , id , name, price, quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='rewiew-details'>
                <p>{name}</p>
                <p>
                    Price : <span>${price}</span>
                   
                </p>
                <p>
                Quantity : <span>${quantity}</span>
                </p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-del'><FontAwesomeIcon className='del-icon' icon={faTrash} /></button>
        </div>
    );
};

export default Reviewitem;