import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../ReviewItem/Reviewitem';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';


const Order = () => {
    const savedcart = useLoaderData();
    const [cart , setCart] = useState(savedcart);
    const handleRemoveFromCart =(id)=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)

    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
               {
                cart.map(product => <Reviewitem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Reviewitem>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}  />
            </div>
        </div>
    );
};

export default Order;