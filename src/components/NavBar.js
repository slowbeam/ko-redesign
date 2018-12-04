import React from "react";
import HamburgerButton from "./HamburgerButton";

const NavBar = props => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo" />
      <div className="navigation-items">
        <div className="navbar-phone">contact</div>
        <div className="navbar-login">newsletter</div>
        <div>
          <HamburgerButton />
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
