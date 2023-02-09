import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="/logo.png" class="logo" />
      <ul id="sidemenu">
        <li>
          <a href="#header">Sign In</a>
        </li>
        <li>
          <a href="#about">Join Now</a>
        </li>
        <li>
          <a href="#services">Find Resorvation</a>
        </li>
        <li>
          <a href="#portfolio">
            <i class="fa fa-globe"></i> English
          </a>
        </li>
        <li>
          <a href="#contact">LKR</a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <i class="fa fa-mobile"></i>
          </a>
        </li>
        <i class="fas fa-times" onclick="closemenu()"></i>
      </ul>
      <i class="fas fa-bars" onclick="openmenu()"></i>
    </nav>
  );
};

export default Navbar;
