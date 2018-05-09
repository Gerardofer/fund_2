import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav>
          <div className="nav-wrapper grey lighten-5">
            <a href="/" className="left brand-logo">
              SevaFund
            </a>
            <ul className="right">
              <li>
                <a id="login" href="/auth/google">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
