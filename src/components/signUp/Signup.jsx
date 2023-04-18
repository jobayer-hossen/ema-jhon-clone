import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const [error ,setError] = useState('');

    const handleSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        setError('');
        if(password !== confirm){
            setError('Your password is wrong !');
            return
        }else if(password < 6){
            setError('Your password must be 6 latter !');
            return
        }

        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            setError(error.message)
        })

    };



    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <p className='text-error'>{error}</p>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor='email'>Email </label>
                    <input type="email"  name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password </label>
                    <input type="password"  name='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password </label>
                    <input type="password"  name='confirm' required />
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
            <p><small>Already have an account? <Link to="/login">Sign Up</Link></small></p>
            
        </div>
    );
};

export default Signup;