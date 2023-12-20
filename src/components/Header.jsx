import React from "react";

import { MdLogin } from "react-icons/md";
import siteLogo from "/TasteLink-SVGLogo1.svg";

const Header = () => {
  return (
    <section className="header">
      <nav>
        <img src={siteLogo} alt="Taste Link" />
        <MdLogin />
      </nav>
    </section>
  );
};

export default Header;
