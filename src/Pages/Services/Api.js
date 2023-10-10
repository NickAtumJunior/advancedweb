import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { Col, FloatButton, Modal, Row, Tabs } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
// import { MdOutlineSettings } from "react-icons/hi";

import { HiMenuAlt1 } from "react-icons/hi";
import { DownOutlined } from "@ant-design/icons";
import { HiHome } from "react-icons/hi";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  AiFillApi,
  AiFillBank,
  AiFillCloud,
  AiFillDatabase,
  AiFillAppstore,
} from "react-icons/ai";
import {
  MdOutlineWork,
  MdPublic,
  MdPrecisionManufacturing,
  MdPermMedia,
  MdOutlineSettings,
} from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHealthNormal, GiHeartPlus } from "react-icons/gi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { TbApi } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaShuttleSpace, FaRobot } from "react-icons/fa6";
import {
  SiExpress,
  SiMysql,
  SiDart,
  SiCss3,
  SiHtml5,
  SiFlutter,
} from "react-icons/si";
import TechStack from "../../Components/TechStack";
const Api = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>Where API Service Excellence Shines.</h1>
          <br />
          <p>
            We are FocusR, your premier destination for API services. Our team
            specializes in full-cycle web and mobile application development,
            delivering customized software solutions that harmonize seamlessly
            with your business requirements. We excel in integrating Oracle and
            SAP ERPs to supercharge your API-based product development and
            foster innovation.
          </p>
          <br />
          <br />
          <a className="primary-btn-cus2" href="#Contact">
            Get Service
          </a>
        </div>
      </div>
      {/* first page ends here */}
      {/* explanation page starts here */}
      <div className="explanation-wrapper-product">
        <h1 className="explanation-wrapper-product-title">
          Nation's Best Api Service Provider
        </h1>
        <br />
        <br />
        <h3>Explore Our Case Studies</h3>
      </div>

      {/* case study page starts here */}
      <div className="case-study-wrapper">
        <div className="left-casestudy">{/* case study image here */}</div>
        <div className="right-casestudy">
          <div className="small-top-case-study">
            <p className="wrapper-span">Salem</p>
            <p className="wrapper-span">Product</p>
          </div>
          <div className="mid-case-study">
            <h1> Micro-Investment Platform with SAMA-Compliant</h1>
            <br />
            <p>
              The Ticketing Tool Development, built using Java, Angular, REST,
              and PrimeReact technologies, played a vital role in enhancing ABC
              Enterprises' workflow and team collaboration. This customized
              solution not only streamlined issue tracking but also provided a
              robust platform for future growth and integration with external
              systems, ultimately improving the overall efficiency of the
              organization.
            </p>
          </div>
          <button className="explore-btn-case-study">Explore more</button>
        </div>
      </div>
      <br />
      <br />
      {/* case study page ends here */}
      {/* second case study starts here */}
      <div className="case-study-wrapper">
        <div className="left-casestudy">{/* case study image here */}</div>
        <div className="right-casestudy">
          <div className="small-top-case-study">
            <p className="wrapper-span">Salem</p>
            <p className="wrapper-span">Product</p>
          </div>
          <div className="mid-case-study">
            <h1> Micro-Investment Platform with SAMA-Compliant</h1>
            <br />
            <p>
              The Ticketing Tool Development, built using Java, Angular, REST,
              and PrimeReact technologies, played a vital role in enhancing ABC
              Enterprises' workflow and team collaboration. This customized
              solution not only streamlined issue tracking but also provided a
              robust platform for future growth and integration with external
              systems, ultimately improving the overall efficiency of the
              organization.
            </p>
          </div>
          <button className="explore-btn-case-study">Explore more</button>
        </div>
      </div>
      <br />
      <br />
      {/* second case study ends here */}
      {/* 
      <div className="tech-stack-wrapper">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div> */}
      <TechStack />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="Contact">
        <Contactform />
      </div>
      <Footer />
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton
          tooltip="Chat Bot"
          icon={
            <BiSolidBot
              style={{
                color: "blue",
              }}
            />
          }
          onClick={() => alert("click")}
        />
      </FloatButton.Group>
      <FloatButton.BackTop />
    </div>
  );
};

export default Api;
