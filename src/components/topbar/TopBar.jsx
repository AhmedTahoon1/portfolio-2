import React from "react";
import "./topBar.scss";
const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topBar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tahoon.@
          </a>
        </div>
        <div className="right">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
