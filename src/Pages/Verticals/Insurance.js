import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Insurance = () => {
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
          Our Excellence in Insurance
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Insurance </h3> */}
          <p>
            <ol>
              <li>
                <b>Insurance Focus:</b> Specializing in solutions tailored for
                the insurance industry.
              </li>
              <li>
                <b>Policy Management:</b> Developing policy administration and
                management systems for insurers.
              </li>
              <li>
                <b>Claims Processing:</b> Providing claims processing solutions
                for efficient and accurate claims handling.
              </li>
              <li>
                <b>Underwriting Automation:</b> Implementing underwriting
                automation tools for risk assessment and decision-making.
              </li>
              <li>
                <b>Insurance Quoting and Pricing:</b> Creating quoting and
                pricing engines for insurance products.
              </li>
              <li>
                <b>Customer Relationship Management (CRM):</b> Enhancing
                customer experiences through CRM solutions for insurers.
              </li>
              <li>
                <b>Agent and Broker Portals:</b> Building portals for agents and
                brokers to manage policies and client relationships.
              </li>
              <li>
                <b>Policyholder Self-Service:</b> Offering self-service portals
                for policyholders to view and manage their policies.
              </li>
              <li>
                <b>Insurance Analytics:</b> Leveraging data analytics for risk
                modeling, fraud detection, and market insights.
              </li>
              <li>
                <b>Digital Insurance Platforms:</b> Transitioning to digital
                platforms for online policy issuance and servicing.
              </li>
              <li>
                <b>Claims Fraud Detection:</b> Implementing fraud detection
                algorithms to identify suspicious claims.
              </li>
              <li>
                <b>Telematics and IoT:</b> Utilizing telematics and IoT devices
                for usage-based insurance and risk assessment.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with insurance
                industry regulations and reporting standards.
              </li>
              <li>
                <b>Life Insurance and Annuities:</b> Offering solutions for life
                insurance products and annuities.
              </li>
              <li>
                <b>Health Insurance Solutions:</b> Providing technology for
                health insurance administration and claims processing.
              </li>
              <li>
                <b>Custom Insurance Solutions:</b> Developing custom software
                and solutions to address unique insurance industry challenges.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with insurers,
                reinsurers, and industry associations to drive innovation and
                efficiency.
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

export default Insurance;
