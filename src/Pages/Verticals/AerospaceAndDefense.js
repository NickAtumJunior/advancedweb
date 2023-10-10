import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const AerospaceAndDefense = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>FocusR Where success gets showcased.</h1>
          <br />
          <p>
            We're a full-cycle web and mobile application development company
            that creates software solutions tailored to the demands of
            businesses, seamlessly integrating Oracle and SAP ERPs to fuel
            efficient product development and innovation.
          </p>
          <br />
          <br />
          <button className="primary-btn-cus2">Get Details</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* first page ends here */}
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "46px",
          }}
        >
          Case Studies
        </h1>
        <br />
        <br />
        <br />
        <br />
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
                and PrimeReact technologies, played a vital role in enhancing
                ABC Enterprises' workflow and team collaboration. This
                customized solution not only streamlined issue tracking but also
                provided a robust platform for future growth and integration
                with external systems, ultimately improving the overall
                efficiency of the organization.
              </p>
            </div>
            <button className="explore-btn-case-study">Explore more</button>
          </div>
        </div>

        <br />
        <br />
        <br />
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
                and PrimeReact technologies, played a vital role in enhancing
                ABC Enterprises' workflow and team collaboration. This
                customized solution not only streamlined issue tracking but also
                provided a robust platform for future growth and integration
                with external systems, ultimately improving the overall
                efficiency of the organization.
              </p>
            </div>
            <button className="explore-btn-case-study">Explore more</button>
          </div>
        </div>
      </div>
      {/* explanation page starts here */}
      <div className="explanation-wrapper-product">
        <h1 className="explanation-wrapper-product-title">
          Our Excellence in AerospaceAndDefense Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of AerospaceAndDefense </h3> */}
          <p>
            <ol>
              <li>
                <b>Aerospace and Defense Focus:</b> Specializing in solutions
                tailored for the aerospace and defense industries.
              </li>
              <li>
                <b>Aircraft Systems:</b> Developing software and systems for
                military aircraft design, avionics, and mission planning.
              </li>
              <li>
                <b>Defense Electronics:</b> Providing solutions for advanced
                defense electronics, including radar systems and electronic
                warfare.
              </li>
              <li>
                <b>Unmanned Aerial Systems (UAS):</b> Developing UAS
                technologies for reconnaissance, surveillance, and
                mission-critical applications.
              </li>
              <li>
                <b>Military Simulation:</b> Building military simulation systems
                for training, mission planning, and tactical decision-making.
              </li>
              <li>
                <b>Naval Systems:</b> Designing naval systems and technologies,
                including shipboard systems and naval communications.
              </li>
              <li>
                <b>Cybersecurity:</b> Providing robust cybersecurity solutions
                to protect sensitive defense information and networks.
              </li>
              <li>
                <b>Missile Systems:</b> Developing missile guidance, control,
                and targeting systems for defense applications.
              </li>
              <li>
                <b>Defense Logistics:</b> Creating logistics and supply chain
                solutions for defense organizations.
              </li>
              <li>
                <b>Command and Control:</b> Building command and control systems
                for military operations and coordination.
              </li>
              <li>
                <b>Counterterrorism:</b> Developing technologies and strategies
                to counteract terrorist threats.
              </li>
              <li>
                <b>Ballistic Protection:</b> Designing solutions for ballistic
                protection, armor systems, and vehicle survivability.
              </li>
              <li>
                <b>Military Training:</b> Providing advanced training solutions
                for military personnel, including virtual and augmented reality.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with defense
                industry regulations, security standards, and export controls.
              </li>
              <li>
                <b>Research and Development:</b> Engaging in research and
                development efforts to advance defense technology and
                capabilities.
              </li>
              <li>
                <b>Custom Defense Solutions:</b> Developing custom software and
                systems to address unique challenges within defense projects.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with defense
                contractors, government agencies, and military branches to
                enhance national security.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <Contactform />
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

export default AerospaceAndDefense;
