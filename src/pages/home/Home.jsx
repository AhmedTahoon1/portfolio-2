import React, { useState } from "react";

/* style */
import "./home.scss";

/* Components */
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Works from "../../components/works/Works";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";

import TopBar from "./../../components/topbar/TopBar";
import Menu from "./../../components/menu/Menu";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="home">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
