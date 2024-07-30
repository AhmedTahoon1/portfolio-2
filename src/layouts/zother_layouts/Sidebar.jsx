import React, { useState } from "react";
//import avatar from "../assets/images/avatar.png";
import SidebarButton from "./../components/sidebar/SidebarButton";
import SidebarHeader from "./../components/sidebar/SidebarHeader";
import SidebarHeaderImg from "./../components/sidebar/SidebarHeaderImg";
import SidebarHeaderText from "./../components/sidebar/SidebarHeaderText";
import SidebarNav from "./../components/sidebar/SidebarNav";
import SidebarLinksGroup from "./../components/sidebar/SidebarLinksGroup";
import SidebarLink from "../components/sidebar/SidebarLink";
import LinksGroupHeader from "./../components/sidebar/LinksGroupHeader";
// Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="" style={{ transition: "all 800ms ease" }}>
      <SidebarButton
        iconCode={faEnvelope}
        position={{ left: "20px", top: "30px" }}
        classes="close"
        handler={() => setShow(true)}
      />
      {show && (
        <div className="sidebar h-full fixed right-0 top-0 bottom-0 z-50 overflow-auto overflow-x-hidden bg-sideBar lg:w-1/5 w-full">
          <div className="p-3">
            <SidebarHeader>
              <SidebarHeaderImg alt="avatar" rounded={true} />
              <SidebarHeaderText header={"أحمد طاحون"} desc={"مطور مواقع"} />
            </SidebarHeader>
            <SidebarNav>
              <SidebarLinksGroup>
                <SidebarLink to="/">استكشاف</SidebarLink>
                <SidebarLink to="/">مشاريع</SidebarLink>
                <SidebarLink to="/">خدمات</SidebarLink>
                <SidebarLink to="/">من أنا؟</SidebarLink>
              </SidebarLinksGroup>
              <SidebarLinksGroup>
                <LinksGroupHeader>التواصل</LinksGroupHeader>
                <SidebarLink to="/"> تواصل معي</SidebarLink>
                <SidebarLink to="/">فيسبوك</SidebarLink>
                <SidebarLink to="/">تويتر</SidebarLink>
                <SidebarLink to="/">لينكد ان</SidebarLink>
              </SidebarLinksGroup>
            </SidebarNav>

            <div className="close absolute left-10 top-12 text-2xl text-mainText lg:hidden">
              <button onClick={() => setShow(false)}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
