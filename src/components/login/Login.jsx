import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';


    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from , {replace:true});
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor='email'>Email </label>
                    <input type="email"  name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password </label>
                    <input type={show?"text" : "password"}  name='password' required />
                    <p onClick={()=>setShow(!show)} ><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="login" />
                <p><small>New to Ema-John ? <Link to="/signup">Crate Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;