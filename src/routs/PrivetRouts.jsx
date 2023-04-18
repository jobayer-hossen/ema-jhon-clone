import React, { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {

    const {user ,loading} = useContext(AuthContext);

    const location = useLocation()
    console.log(location);

    if(loading){
        return <h5>Loading ...</h5>
    };
    if(user){
        return children ;
    };
    return <Navigate to='/login' state={{from:location}} replace ></Navigate> ;
};

export default PrivetRouts;