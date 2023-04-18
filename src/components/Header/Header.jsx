import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {logOut , user}= useContext(AuthContext);
//    console.log(user);

   const handleLogout =()=>{
    logOut()
    .then(result=>{})
    .catch(error =>{
        console.error(error)
    })
   }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Log in</Link>
                <Link to='/signup'>Sign Up</Link>
                {
                    user && <span className='text-white'>{user.email} <button onClick={handleLogout}> Log out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;