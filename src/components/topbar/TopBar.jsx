import React from "react";
import "./topBar.scss";
import { Link } from "react-router-dom";
const TopBar = ({ menuOpen, setMenuOpen, showMenu = true }) => {
  return (
    <div className={"topBar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tahoon.@
          </a>
        </div>
        <div className="right">
          {showMenu && (
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          )}
          {!showMenu && <Link to={"/"}>Go Home</Link>}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
