import React from 'react'

import { createContext } from 'react'

import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    if(auth?.currentUser){
      setIsLoggedIn(true);
      console.log("is logged in");
    } else {
      setIsLoggedIn(false);
      console.log("not logged in");
    }
  },[])

  console.log("current user", auth?.currentUser?.uid);

  const authProviderValues = {
    email, setEmail, password, setPassword, errorMsg, isLoggedIn
  }

  return (
    <AuthContext.Provider value={authProviderValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider