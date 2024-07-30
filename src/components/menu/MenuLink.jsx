import React from "react";

const MenuLink = ({ children, setMenuOpen, to }) => {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={to ? to : "#intro"}>{children}</a>
    </li>
  );
};

export default MenuLink;
