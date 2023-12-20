import React from "react";

import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import siteLogo from "/TasteLink-SVGLogo1.svg";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <section className="header">
      <nav>
        <Link to="/">
          <img src={siteLogo} alt="Taste Link" />
        </Link>

        {isLoggedIn ? (
          <MdLogout onClick={logOut} className="logOutButton" />
        ) : (
          <Link to="/UserAuthentication">
            <MdLogin className="logOutButton" />
          </Link>
        )}
      </nav>
    </section>
  );
};

export default Header;
