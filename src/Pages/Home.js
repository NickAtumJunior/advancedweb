import React, { useEffect, useState } from "react";
import CarouselComponent from "../Components/CarouselComponent";
import Navbar from "../Components/Navbar";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import Footer from "../Components/Footer";
import CardRowWhite from "../Components/CardRowWhite";

import { Col, FloatButton, Row, Tabs } from "antd";
import Chart from "../assets/Chart.png";
import ConsultingIcon from "../assets/Icons-lunacy/consulting.png";
import DevelopmentIcon from "../assets/Icons-lunacy/Development.png";
import ProcessIcon from "../assets/Icons-lunacy/Process.png";
import IntegrationIcon from "../assets/Icons-lunacy/Integration.png";
import Migration from "../assets/Icons-lunacy/Migration.png";
import LengthyNoteBar from "../Components/LengthyNoteBar";
import AboutCard from "../Components/AboutCard";
import FirstPage from "../Components/FirstPage";
import Card4 from "../Components/Card4";
import CustomInput from "../Components/CustomInput";
import Contactform from "../Components/Contactform";
import Casestudy from "../Components/Casestudy";
import Products from "./Products";
import DealerPortal from "./Product/DealerPortal";
import TimesheetApplication from "./Product/TimesheetApplication";
import TechStack from "../Components/TechStack";
import Chat from "../Components/Chat";
// import AOS from 'aos';
const Home = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Navbar />
      {/* <FirstPage /> */}
      <div className="first-page-wrapper">
        <div className="inner-page-left">
          <h1>Doing More for Your Technical Success</h1>
          <br />
          <p>
            We're a full-cycle web and mobile application development company
            that creates software solutions tailored to the demands of
            businesses, seamlessly integrating Oracle and SAP ERPs to fuel
            efficient product development and innovation.
          </p>
          <br />
          <br />
          <a className="primary-btn-cus2" href="#Contact-Form">
            Connect With Us
          </a>
        </div>
      </div>
      {/* <CarouselComponent /> */}
      <Card4 />
      <CardRowWhite />
      <TechStack />
      {/* <AboutCard /> */}
      <Casestudy />
      <div id="Contact-Form">
        <Contactform />
      </div>
      {isChatbotVisible && <Chat />}
      <FloatButton
          tooltip="Chat Bot"
          icon={
            <BiSolidBot
              style={{
                color: "blue",
              }}
            />
          }
          onClick={toggleChatbot}
        />
      <FloatButton.BackTop />
      {/* <Products/> */}
      <Footer />
      {/* <DealerPortal/> */}
      {/* <TimesheetApplication/> */}
    </div>
  );
};

export default Home;
