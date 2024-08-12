import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import useDocTitle from "./../../hooks/useDocTitle";

import "./dashboardlayout.scss";
import { useState } from "react";

const DashboardLayout = () => {
  useDocTitle("Dashboard");
  const [active, setActive] = useState("");

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <>
      <div className="usePC">OPen It On PC</div>
      <div className="dashboard-layout">
        <div className="dash-left">
          <ul>
            <li
              onClick={() => handleActive("intro")}
              className={active === "intro" ? "active" : ""}
            >
              <Link to={"intro"}>Intro Edit</Link>
            </li>
            <li
              onClick={() => handleActive("portfolio")}
              className={active === "portfolio" ? "active" : ""}
            >
              <Link to={"portfolio"}>Portfolio Edit</Link>
            </li>
            <li
              onClick={() => handleActive("works")}
              className={active === "works" ? "active" : ""}
            >
              <Link to={"works"}>Works Edit</Link>
            </li>
            <li
              onClick={() => handleActive("testimonials")}
              className={active === "testimonials" ? "active" : ""}
            >
              <Link to={"testimonials"}>Testimonials Edit</Link>
            </li>
            <li
              onClick={() => handleActive("contact")}
              className={active === "contact" ? "active" : ""}
            >
              <Link to={"contact"}>Contact Edit</Link>
            </li>
          </ul>
        </div>
        <div className="dash-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
