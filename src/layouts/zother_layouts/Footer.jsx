import { Link } from "react-router-dom";
import logo from "../assets/images/avatar.png";
const Footer = () => {
  return (
    <div className="footer p-10 pt-20 bg-sideBar text-mainText absolute bottom-0 w-full">
      <div className="footer-links-lists flex flex-wrap justify-between mb-4">
        <ul style={{ transition: "all 0.8s ease" }}>
          <p className="list-header">Main Links</p>
          <li className="text-secText hover:text-mainText">
            <Link>Explore</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Explore</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Explore</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Explore</Link>
          </li>
        </ul>
        <ul style={{ transition: "all 0.8s ease" }}>
          <p className="list-header">Second Links</p>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
        </ul>
        <ul style={{ transition: "all 0.8s ease" }}>
          <p className="list-header">Third Links</p>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
        </ul>
        <ul style={{ transition: "all 0.8s ease" }}>
          <p className="list-header">Fourth Links</p>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
          <li className="text-secText hover:text-mainText">
            <Link>Projects</Link>
          </li>
        </ul>
      </div>
      <hr className="text-secText" />
      <div className="footer-bottom justify-between flex mt-10 text-xl">
        <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="footer-logo w-8">
          <img src={logo} alt="Test" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
