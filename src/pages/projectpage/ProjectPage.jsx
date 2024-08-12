import React, { useState, createPortal } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Line from "../../components/Line";
// Top Bar
import TopBar from "../../components/topbar/TopBar";

import ImagePopUp from "./../../components/imagePopUp/ImagePopUp";
// style
import "./projectpage.scss";

import img from "../../assets/images/shake.svg";

const ProjectPage = () => {
  const [imgClicked, setImageClicked] = useState("");
  const [isShowModal, setIshowModal] = useState(false);
  const [data] = useState({
    id: "8138021",
    title: "Test Project",
    desc: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
    mainImg: "../../assets/icons/phone.png",
    images: [
      "../assets/images/fotor-ai-20240713145342.jpg",
      "../assets/images/fotor-ai-20240713145342.jpg",
      "../assets/images/fotor-ai-20240713145342.jpg",
      "../assets/images/fotor-ai-20240713145342.jpg",
    ],
    publishLink: "No",
    repoLink: "No",
    category: "web",
    techs: "HTML,CSS,JS,REACT",
    link: "",
    version: "1",
    creator: "A.Tahoon",
    show: "true",
  });
  const { images } = data;

  const imageClicked = (e) => {
    setImageClicked(e.target.src);
    setIshowModal(true);
  };
  const closeModal = () => {
    setIshowModal(false);
  };

  return (
    <>
      {isShowModal && (
        <ImagePopUp imageUrl={imgClicked} closeModal={closeModal} />
      )}
      <TopBar showMenu={false} />
      <div className="project">
        <div className="project-content project-left">
          <div className="edit">
            <Link to={""}>Edit</Link>
          </div>
          <header>
            <h2 className="project-title">Title-Title-Title-Title-Title</h2>
            <span className="project-creator">
              by <Link to={"/"}>Creator</Link>
            </span>
          </header>
          <div className="project-images">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} onClick={(e) => imageClicked(e)}>
                  <img src={img} alt="img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Line bg="#15023a" width="100%" height="5px" radius="5px" />
          <div className="project-desc">
            <bdi>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              earum repellat quis asperiores velit assumenda beatae iste dicta
              culpa placeat debitis soluta consectetur reprehenderit dolorum
              veritatis, aspernatur doloremque incidunt repellendus.
            </bdi>
          </div>
          <Line bg="#15023a" width="100%" height="5px" radius="5px" />
          <div className="related-projects">
            <h2 className="header">Related Projects:</h2>
            <div className="projects-content">
              <div className="project-card">
                <img src={img} alt="das" />
                <h3>Title</h3>
                <Link to={""}>View</Link>
              </div>
              <div className="project-card">
                <img src={img} alt="das" />
                <h3>Title</h3>
                <Link to={""}>View</Link>
              </div>
              <div className="project-card">
                <img src={img} alt="das" />
                <h3>Title</h3>
                <Link to={""}>View</Link>
              </div>
              <div className="project-card">
                <img src={img} alt="das" />
                <h3>Title</h3>
                <Link to={""}>View</Link>
              </div>
            </div>
          </div>
        </div>
        <aside className="project-right">
          <div className="project-details">
            <div className="project-version">
              <span>version:</span> {"1"}
            </div>
            <div className="project-repo">
              <span className="repo-icon icon">X</span>
              <Link to={"/"}>Project Repo</Link>
            </div>
            <div className="project-view">
              <span className="view-icon icon">Y</span>
              <Link to={"/"}>Project View</Link>
            </div>
            <div className="project-category">
              <span className="category-icon icon">Y</span>
              <Link to={"/"}>Category</Link>
            </div>
          </div>
          <div className="project-tools">
            <h3>Techs</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Json-Server</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ProjectPage;
