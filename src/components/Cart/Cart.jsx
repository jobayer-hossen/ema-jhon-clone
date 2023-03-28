import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0 ;

    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shiping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;