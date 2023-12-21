import React from "react";

import UsersContext from "../contexts/UsersContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import BottomNavButton from "./BottomNavButton";

import { Link } from "react-router-dom";

function BottomNavBar() {
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

  return (
    <>
      {isLoggedIn && (
        <section className="bottomNav">
          {console.log("USER ROLE IS", role)}
          {userData.role === "restaurant" && (
            <>
              <Link to="/">
                <BottomNavButton page="Home" />
              </Link>
              <Link to="/RestaurantAdminPage">
                <BottomNavButton page="Menu" />
              </Link>
              <Link to="/RestaurantJobs">
                <BottomNavButton page="Jobs" />
              </Link>
              <Link to="/RestaurantProfile">
                <BottomNavButton page="Profile" />
              </Link>
            </>
          )}
          {userData.role === "user" && (
            <>
              <Link to="/">
                <BottomNavButton page="Home" />
              </Link>
              <Link to="/Cart">
                <BottomNavButton page="Cart" />
              </Link>
              <Link to="/Orders">
                <BottomNavButton page="Orders" />
              </Link>
              <Link to="/Jobs">
                <BottomNavButton page="Jobs" />
              </Link>
              <Link to="/Profile">
                <BottomNavButton page="Profile" />
              </Link>
            </>
          )}
        </section>
      )}
    </>
  );
}

export default BottomNavBar;
