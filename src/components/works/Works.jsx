import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./works.scss";
import mobileIcon from "../../assets/icons/phone.png";
import wallpaper from "../../assets/images/fotor-ai-20240713145342.jpg";

const Works = () => {
  const data = [
    {
      id: "1",
      icon: mobileIcon,
      title: "Web Design",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aut, rem recusandae id et magnam eum deleniti sint.",
      img: wallpaper,
    },
    {
      id: "2",
      icon: mobileIcon,
      title: "Mobile Application",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aut, rem recusandae id et magnam eum deleniti sint.",
      img: wallpaper,
    },
    {
      id: "3",
      icon: mobileIcon,
      title: "Web Developing",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aut, rem recusandae id et magnam eum deleniti sint.",
      img: wallpaper,
    },
  ];

  /*const handleClick = (arrow) => {
    arrow === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };*/

  return (
    <section className="works" id="works">
      <div className="slider">
        <div className="container">
          <Swiper
            rewind={true}
            cssMode={true}
            navigation={true}
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
