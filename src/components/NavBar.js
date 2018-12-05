import React from "react";
import HamburgerButton from "./HamburgerButton";

const NavBar = props => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-left">
        <div className="navbar-logo" />
        <div id="header-pipe" />
        <div id="navbar-left-text">New York</div>
      </div>
      <div className="navigation-items">
        <div className="navbar-contact">contact</div>
        <div className="navbar-newsletter">newsletter</div>
        <div>
          <HamburgerButton />
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
