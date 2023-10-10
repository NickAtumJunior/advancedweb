import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const EnergyAndUtilities = () => {
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
          Our Excellence in Energy and Utilities
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Energy and Utilities </h3> */}
          <p>
            <ol>
              <li>
                <b>Energy and Utilities Focus:</b> Specializing in solutions
                tailored for the energy and utilities industry.
              </li>
              <li>
                <b>Smart Grid Solutions:</b> Developing smart grid technologies
                for efficient energy distribution and management.
              </li>
              <li>
                <b>Renewable Energy Integration:</b> Integrating renewable
                energy sources such as solar and wind into the grid.
              </li>
              <li>
                <b>Energy Management Systems:</b> Creating systems for real-time
                energy monitoring, optimization, and demand response.
              </li>
              <li>
                <b>Utility Billing and Customer Service:</b> Providing billing
                and customer service solutions for utility companies.
              </li>
              <li>
                <b>Asset Management:</b> Implementing asset management systems
                for maintaining energy infrastructure.
              </li>
              <li>
                <b>Environmental Monitoring:</b> Monitoring and reporting
                environmental impacts and compliance with regulations.
              </li>
              <li>
                <b>Energy Efficiency Solutions:</b> Developing technologies and
                strategies to improve energy efficiency.
              </li>
              <li>
                <b>Grid Resilience:</b> Enhancing the resilience of energy grids
                against natural disasters and cyber threats.
              </li>
              <li>
                <b>Energy Storage Solutions:</b> Implementing energy storage
                systems, including batteries and grid-scale storage.
              </li>
              <li>
                <b>Water and Wastewater Management:</b> Managing water treatment
                and distribution systems for utilities.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with energy
                and environmental regulations.
              </li>
              <li>
                <b>Remote Monitoring and Control:</b> Enabling remote monitoring
                and control of energy and utility infrastructure.
              </li>
              <li>
                <b>Grid Modernization:</b> Modernizing energy grids with
                advanced technologies and automation.
              </li>
              <li>
                <b>Analytics and Data Insights:</b> Leveraging data analytics
                for predictive maintenance and decision-making.
              </li>
              <li>
                <b>Custom Energy Solutions:</b> Developing custom software and
                solutions to address unique challenges within the energy and
                utilities sector.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with energy
                providers, utilities, and regulatory bodies to drive innovation
                and sustainability.
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

export default EnergyAndUtilities;
