import React from "react";
import Logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
        <a href="#/">VRROOMZ</a>
      </div>
      <ul>
        <li>
          <a href="#/">play</a>
        </li>
        <li>
          <a href="#/">options</a>
        </li>
        <li>
          <a href="#/">reviews</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
