import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./works.scss";

const Works = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      // Call Backend
      const res = await fetch("http://localhost:5000/works?show=true").then(
        (res) => res.json()
      );
      setData(res);
    };
    fetchApi();
  }, []);

  /*const handleClick = (arrow) => {
    arrow === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };*/

  return (
    <section
      className="works"
      id="works"
      style={{ display: data.length > 0 ? "flex" : "none" }}
    >
      <div className="slider">
        <div className="container">
          <Swiper
            rewind={true}
            cssMode={true}
            navigation={data.length > 1 ? true : false}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="item">
                  <div className="left">
                    <div className="left-container">
                      <div className="img-container">
                        <img src={item.icon} alt="icon" />
                      </div>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                      <span>Projects</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
