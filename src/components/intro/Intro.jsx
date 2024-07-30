import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
import avatar from "../../assets/images/avataaars-1721562423147.png";
import arrowDown from "../../assets/icons/arrow-down-sign-to-navigate.png";
const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ahmed Tahoon</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={arrowDown} alt="Arrow Down" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
