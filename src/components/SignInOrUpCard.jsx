import React from 'react'

import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useEffect } from 'react';

function SignInOrUpCard() {

  const {
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
  } = useContext(AuthContext);

  useEffect(()=>{
    console.log("LOGGED In?", isLoggedIn);
  },[isLoggedIn])

  return (
    <section>
      <section>
        <h2>Sign In</h2>
        <form onSubmit={signIn}>
        <input type="email" name="email" id="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" name="password" id="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Sign In</button>
        
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </form>
      </section>
      <section>
        <h2>Sign Up</h2>
      </section>

      {/* TEMPORARILY HERE */}
      { isLoggedIn &&  (
      <button onClick={logOut}>Log Out</button>
      )}
    </section>
  )
}

export default SignInOrUpCard