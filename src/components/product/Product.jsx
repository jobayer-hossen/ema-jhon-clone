import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,ratings,price,seller} = props.product;
    const habndelCart = props.habndelCart;
    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={()=>habndelCart(props.product)} className='btn-cart'>Add to Cart
            <span className='shoping-cart-logo'>
            <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            </button>
        </div>
    );
};

export default Product;