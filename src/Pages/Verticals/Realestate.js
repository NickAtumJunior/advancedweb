import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Realestate = () => {
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
          Our Excellence in Public Sector
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Realestate </h3> */}
          <p>
            <ol>
              <li>
                <b>Real Estate Focus:</b> Specializing in solutions tailored for
                the real estate industry.
              </li>
              <li>
                <b>Property Management Software:</b> Developing property
                management systems for landlords and property managers.
              </li>
              <li>
                <b>Real Estate Listings and Portals:</b> Creating real estate
                listing websites and portals for property listings.
              </li>
              <li>
                <b>Online Property Booking and Rental:</b> Offering online
                booking and rental platforms for properties.
              </li>
              <li>
                <b>Real Estate CRM:</b> Enhancing customer relationships and
                lead management for real estate professionals.
              </li>
              <li>
                <b>Property Valuation and Appraisal:</b> Providing property
                valuation and appraisal software for accurate assessments.
              </li>
              <li>
                <b>Real Estate Investment Analysis:</b> Developing tools for
                analyzing real estate investments and ROI.
              </li>
              <li>
                <b>Property Search and Discovery:</b> Creating user-friendly
                search and discovery features for property buyers and renters.
              </li>
              <li>
                <b>Real Estate Analytics:</b> Leveraging data analytics for
                market trends and property insights.
              </li>
              <li>
                <b>Real Estate Mobile Apps:</b> Developing mobile applications
                for property search and management.
              </li>
              <li>
                <b>Property Inspection and Maintenance:</b> Offering tools for
                property inspection and maintenance scheduling.
              </li>
              <li>
                <b>Real Estate Compliance:</b> Ensuring compliance with real
                estate regulations and reporting requirements.
              </li>
              <li>
                <b>Virtual Tours and 3D Property Viewing:</b> Providing
                immersive property viewing experiences through technology.
              </li>
              <li>
                <b>Custom Real Estate Solutions:</b> Developing custom software
                and solutions to address unique real estate challenges.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with real estate
                agencies, property developers, and realtors to enhance property
                services and experiences.
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

export default Realestate;
