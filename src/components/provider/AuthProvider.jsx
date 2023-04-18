import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({children}) => {


    const [loading ,setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    };
    
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password );
    };
    
    const logOut =()=>{
        return signOut(auth);
    };
    
    // observer
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])
    
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading
    };
    










    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;