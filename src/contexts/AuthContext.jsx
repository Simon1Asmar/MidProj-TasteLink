import React from "react";

import { createContext } from "react";

import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   if (auth?.currentUser) {
  //     setIsLoggedIn(true);
  //     console.log("is logged in");
  //   } else {
  //     setIsLoggedIn(false);
  //     console.log("not logged in");
  //   }
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  console.log("current user", auth?.currentUser?.uid);

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      setUserData(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // .then(() => {
      //   setUserData(auth.currentUser);
      // })
      // .finally(() => {
      //   console.log("finally");
      //   setErrorMsg(null);
      // });
      const user = auth.currentUser;
      setUserData(user);
      setIsLoggedIn(true);
      setErrorMsg(null);
      localStorage.setItem("currentUser", JSON.stringify(user));
    } catch (err) {
      console.log(err.code);
      if (err.code === "auth/invalid-credential") {
        setErrorMsg("Incorrect Email or Password");
      } else {
        setErrorMsg(err.message);
      }
    }
  };

  const logOut = async () => {
    try {
      signOut(auth);
      setIsLoggedIn(false);
      setUserData(null);
      localStorage.removeItem("currentUser");
    } catch (err) {
      console.error(err);
    }
  };

  const authProviderValues = {
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    isLoggedIn,
    signIn,
    signUp,
    logOut,
    userData,
  };

  return (
    <AuthContext.Provider value={authProviderValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
