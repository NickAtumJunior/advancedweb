import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Automotive = () => {
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
          Our Excellence in Automotive Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Automotive </h3> */}
          <p>
            <ol>
              <li>
                <b>Automotive Focus:</b> Specializing in vertical solutions
                tailored for the automotive industry.
              </li>
              <li>
                <b>Connected Vehicles:</b> Developing solutions for connected
                vehicles, including telematics, infotainment systems, and
                vehicle-to-everything (V2X) communication.
              </li>
              <li>
                <b>Autonomous Driving:</b> Creating technologies and software
                for autonomous and semi-autonomous vehicles, including
                perception systems and control algorithms.
              </li>
              <li>
                <b>Supply Chain Optimization:</b> Optimizing supply chain
                management for automotive manufacturers, suppliers, and
                distributors.
              </li>
              <li>
                <b>Manufacturing Automation:</b> Implementing automation
                solutions for automotive manufacturing processes, including
                robotics and quality control systems.
              </li>
              <li>
                <b>Connected Dealerships:</b> Enabling dealerships with digital
                tools for customer engagement, inventory management, and service
                scheduling.
              </li>
              <li>
                <b>Customer Experience:</b> Enhancing the automotive customer
                experience through digital interfaces, online sales platforms,
                and service portals.
              </li>
              <li>
                <b>Vehicle Diagnostics:</b> Developing diagnostic tools and
                remote monitoring systems for vehicle health and maintenance.
              </li>
              <li>
                <b>Fleet Management:</b> Offering fleet management solutions for
                logistics and transportation companies in the automotive sector.
              </li>
              <li>
                <b>Electric and Hybrid Vehicles:</b> Supporting the development
                of electric and hybrid vehicle technologies, including battery
                management and charging infrastructure.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with
                automotive industry regulations and safety standards.
              </li>
              <li>
                <b>Vehicle Security:</b> Implementing robust security measures
                to protect connected vehicles from cyber threats.
              </li>
              <li>
                <b>Data Analytics:</b> Leveraging data analytics to gain
                insights into vehicle performance, customer behavior, and market
                trends.
              </li>
              <li>
                <b>Environmental Sustainability:</b> Promoting environmentally
                sustainable practices in automotive design and manufacturing.
              </li>
              <li>
                <b>Custom Automotive Solutions:</b> Developing custom software
                and technologies to address unique challenges within the
                automotive vertical.
              </li>
              <li>
                <b>Partnerships:</b> Collaborating with automotive
                manufacturers, suppliers, and industry stakeholders to drive
                innovation.
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

export default Automotive;
