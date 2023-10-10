import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Manufacturing = () => {
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
          Our Excellence in Manufacturing
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Manufacturing </h3> */}
          <p>
            <ol>
              <li>
                <b>Manufacturing Focus:</b> Specializing in solutions tailored
                for the manufacturing industry.
              </li>
              <li>
                <b>Manufacturing Execution Systems (MES):</b> Developing MES
                software for real-time production monitoring and control.
              </li>
              <li>
                <b>Inventory Management:</b> Creating inventory management
                solutions for optimizing stock levels and supply chains.
              </li>
              <li>
                <b>Quality Control and Assurance:</b> Providing quality control
                and assurance tools for product inspection and compliance.
              </li>
              <li>
                <b>Production Planning and Scheduling:</b> Offering production
                planning and scheduling software for optimizing operations.
              </li>
              <li>
                <b>Supply Chain Management:</b> Implementing supply chain
                management solutions for end-to-end visibility and efficiency.
              </li>
              <li>
                <b>Asset and Equipment Maintenance:</b> Developing maintenance
                management systems for equipment reliability.
              </li>
              <li>
                <b>Industrial IoT (IIoT):</b> Utilizing IIoT devices and sensors
                for data-driven manufacturing processes.
              </li>
              <li>
                <b>Lean Manufacturing:</b> Implementing lean manufacturing
                principles through software and process optimization.
              </li>
              <li>
                <b>Product Lifecycle Management (PLM):</b> Managing product
                lifecycles, from design to end-of-life.
              </li>
              <li>
                <b>Manufacturing Analytics:</b> Leveraging data analytics for
                insights into production efficiency and quality.
              </li>
              <li>
                <b>Custom Manufacturing Solutions:</b> Developing custom
                software and solutions to address unique manufacturing
                challenges.
              </li>
              <li>
                <b>3D Printing and Additive Manufacturing:</b> Supporting
                advanced manufacturing techniques such as 3D printing.
              </li>
              <li>
                <b>Factory Automation:</b> Automating manufacturing processes
                with robotics and control systems.
              </li>
              <li>
                <b>Energy Efficiency in Manufacturing:</b> Implementing
                energy-saving measures and sustainability initiatives.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with
                manufacturing industry regulations and safety standards.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with manufacturing
                companies, industry associations, and technology providers to
                drive innovation and productivity.
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

export default Manufacturing;
