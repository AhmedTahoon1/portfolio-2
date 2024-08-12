import { NavHashLink } from "react-router-hash-link";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && " active")}>
      <div className="close-icon" onClick={() => setMenuOpen(false)}>
        <span className="line1"></span>
        <span className="line2"></span>
      </div>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <NavHashLink
            activeClassName="active"
            activeStyle={{ color: "crimson" }}
            smooth
            to="#intro"
          >
            Home
          </NavHashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavHashLink
            activeClassName="active"
            activeStyle={{ color: "crimson" }}
            smooth
            to="#portfolio"
          >
            Portfolio
          </NavHashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavHashLink
            activeClassName="active"
            activeStyle={{ color: "crimson" }}
            smooth
            to="#works"
          >
            Works
          </NavHashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavHashLink
            activeClassName="active"
            activeStyle={{ color: "crimson" }}
            smooth
            to="#testimonials"
          >
            Testimonials
          </NavHashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavHashLink
            activeClassName="active"
            activeStyle={{ color: "crimson" }}
            smooth
            to="#contact"
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
