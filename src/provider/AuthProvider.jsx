import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  
  const createUser =( email, password ) =>{
    setLoading(true);
    createUserWithEmailAndPassword ( auth , email , password )
  }

  const signInUser =(email , password) =>{
    setLoading(true);
    return signInWithEmailAndPassword( auth , email , password )
  }

  const logOut =() => {
    setLoading(true);
    return signOut(auth);
  }

  //Observe auth state change
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
      console.log('Current value of the current user ', currentUser);
      setUser(currentUser) ;
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  },[])

  const authInfo = {
     user,
     loading,
     createUser,
     signInUser,
     logOut
    };
 
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes ={
  children:PropTypes.node
}

//Process of the using uesContext
/**
 * 1.create context and export it
 * 2.set provider with value
 * 3.use the Auth Provider in the main.jsx file
 * 4.Access children in the AuthProvider component as children and use it in the middle of the Provider
 */

// useEffect(()=>{
  //   const unSubscribe = onAuthStateChanged(auth , currentUser =>{
  //     setUser(currentUser);
  //     console.log('Observing current user inside useEffect of AutoProvider ', currentUser)
  //   });

  //   return() =>{
  //     unSubscribe()
  //   }
  // },[])