import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "./intro.scss";

import arrowDown from "../../assets/icons/arrow-down-sign-to-navigate.png";
import avatar from "../../assets/images/avataaars-1721562423147.png";
const Intro = () => {
  const [data, setData] = useState({
    img: "../../assets/images/avataaars-1721562423147.png",
    name: "Ahmed",
    jobs: "",
  });

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch("http://localhost:5000/intro").then((res) =>
        res.json()
      );
      setData(res);
    };
    fetchApi();
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
          <h1>{data.name}</h1>
          <h3>
            <ReactTyped
              strings={data.jobs.split(",")}
              typeSpeed={60}
              backSpeed={50}
              backDelay={1000}
              startDelay={500}
              attr="value"
              loop
            >
              <input type="text" />
            </ReactTyped>
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
