import React from "react";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

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
    setName,
    name,
    setRole,
    role,
  } = useContext(AuthContext);

  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    console.log("LOGGED In?", isLoggedIn);
  }, [isLoggedIn]);

  const signInformElements = () => {
    return (
      <section>
        <h2>Sign In</h2>
        <form onSubmit={signIn}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit">Sign In</button>

          <a
            onClick={() => {
              setEmail("");
              setPassword("");
              setName("");
              setIsSignIn(false);
            }}
          >
            Create New Account
          </a>
        </form>
      </section>
    );
  };

  const registerFormElements = () => {
    return (
      <section>
        <h2>Sign Up</h2>
        <form onSubmit={signUp}>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            placeholder="Name"
          />
          <input
            type="email"
            name="email2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            name="password2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <label>
            Role:
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={() => setRole("user")}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="restaurant"
                checked={role === "restaurant"}
                onChange={() => setRole("restaurant")}
              />
              Restaurant
            </label>
          </label>

          <button type="submit">Sign Up</button>

          <a
            onClick={() => {
              setEmail("");
              setPassword("");
              setName("");
              setIsSignIn(true);
            }}
          >
            Sign In
          </a>
        </form>
      </section>
    );
  };

  return (
    <section>
      {isSignIn ? signInformElements() : registerFormElements()}

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {/* TEMPORARILY HERE */}
      {isLoggedIn && <button onClick={logOut}>Log Out</button>}
    </section>
  );
}

export default SignInOrUpCard;
