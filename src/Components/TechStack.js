import React from "react";
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

const TechStack = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: <h2>Web Technologies</h2>,
      children: (
        <div className="tech-stack-inner">
          <div className="tech-stack-item">
            <FaReact
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>React</h4>
          </div>
          <div className="tech-stack-item">
            <FaAngular
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Angular</h4>
          </div>
          <div className="tech-stack-item">
            <FaJava
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Java</h4>
          </div>
          <div className="tech-stack-item">
            <FaPython
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Python</h4>
          </div>
          <div className="tech-stack-item">
            <FaNodeJs
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Node.js</h4>
          </div>
          <div className="tech-stack-item">
            <FaPhp
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>PHP</h4>
          </div>
          <div className="tech-stack-item">
            <BiLogoSpringBoot
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>SpringBoot</h4>
          </div>
          <div className="tech-stack-item">
            <SiExpress
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Express Js</h4>
          </div>
          <div className="tech-stack-item">
            <SiMysql
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>MySQL</h4>
          </div>
          <div className="tech-stack-item">
            <SiDart
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Dart</h4>
          </div>
          <div className="tech-stack-item">
            <SiCss3
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>CSS3</h4>
          </div>
          <div className="tech-stack-item">
            <SiHtml5
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>HTML</h4>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: <h2>Cross Platform</h2>,
      children: (
        <div className="tech-stack-inner2">
          <div className="tech-stack-item">
            <FaReact
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>React Native</h4>
          </div>
          <div className="tech-stack-item">
            <SiFlutter
              style={{
                position: "relative",
                fontSize: "3em",
                color: "#0055cc",
              }}
            />
            <h4>Flutter</h4>
          </div>
        </div>
      ),
    },
    // {
    //   key: "3",
    //   label: <h2>Design Systems</h2>,
    //   children: (
    //     <div className="tech-stack-inner">
    //       <div className="tech-stack-item">
    //         <FaReact
    //           style={{
    //             position: "relative",
    //             fontSize: "3em",
    //             color: "#0055cc",
    //           }}
    //         />
    //         <h4>React Native</h4>
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="tech-stack-wrapper">
        <h1 style={{
            textAlign:'center',
            fontSize:'56px',
            margin:'1em'
        }}>Immersive Technical Stuff</h1> 
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default TechStack;
