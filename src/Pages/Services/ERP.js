import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { Col, FloatButton, Modal, Row } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
// import { MdOutlineSettings } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
//
const ERP = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>FocusR Efficiency and Excellence Converge.</h1>
          <br />
          <p>
            We're a comprehensive ERP service provider specializing in
            developing customized software solutions perfectly aligned with the
            unique needs of businesses. Our expertise lies in seamlessly
            integrating Oracle and SAP ERPs, empowering businesses to drive
            efficiency, streamline operations, and foster innovation throughout
            their product development journey
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
          Nation's Best ERP Service Provider
        </h1>
      </div>
      {/* four card here  */}
      <div className="card-4-holder">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Implementation</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Empowering Excellence Through Seamless ERP Implementation
                for Optimal Business Performance and Growth.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Upgarde</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                Unlocking Business Potential: Your ERP Upgrade Partner for
                Enhanced Performance and Advanced Capabilities.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Support</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Support: Your ERP Lifeline for Smooth Operations, Expert
                Guidance, and Continuous Improvement.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Development</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Development: Crafting Custom ERP Solutions to Drive
                Innovation, Efficiency, and Business Growth
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* four card ends here */}
      {/* second card starts here */}
      <div className="card-4-holder">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>
                Business Process <br />
                Re-Engineering
              </h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Revitalizing Business Through Strategic Process
                Reengineering for Efficiency, Agility, and Sustainable Growth.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Process Automation</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Streamlining Operations Through Innovative Process
                Automation for Enhanced Efficiency and Cost Savings in Your
                Organization.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Testing & Audit</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Testing & Audit Ensuring ERP Systems' Integrity,
                Security, and Performance for Your Business's Peace of Mind and
                Success.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Training</h1>
              <span className="card-4-inner-arrow">
                <MdOutlineSettings />
              </span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                FocusR Training Empowering Your Team with Comprehensive ERP
                Education for Enhanced Competence and Productivity in Your
                Business Operations.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>
      {/* second card ends here */}
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

export default ERP;
