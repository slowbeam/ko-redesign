import React from "react";
import HamburgerMenu from "react-hamburger-menu";

class NavBar extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div className="flex-wrapper">
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
              <div className="hamburger-button">
                <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick}
                  width={10}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color="black"
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
