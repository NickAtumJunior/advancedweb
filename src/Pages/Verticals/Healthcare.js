import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Healthcare = () => {
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
          Our Excellence in Healthcare
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Healthcare </h3> */}
          <p>
            <ol>
              <li>
                <b>Healthcare Focus:</b> Specializing in solutions tailored for
                the healthcare industry.
              </li>
              <li>
                <b>Electronic Health Records (EHR):</b> Developing and
                implementing EHR systems for healthcare providers.
              </li>
              <li>
                <b>Patient Management:</b> Creating patient management and
                appointment scheduling solutions.
              </li>
              <li>
                <b>Telehealth and Telemedicine:</b> Enabling remote patient
                consultations and healthcare services.
              </li>
              <li>
                <b>Medical Imaging:</b> Providing medical imaging and PACS
                (Picture Archiving and Communication System) solutions.
              </li>
              <li>
                <b>Healthcare Analytics:</b> Leveraging data analytics for
                healthcare insights and population health management.
              </li>
              <li>
                <b>Pharmacy Management:</b> Developing pharmacy management and
                prescription filling software.
              </li>
              <li>
                <b>Medical Billing and Claims:</b> Offering medical billing and
                claims processing solutions.
              </li>
              <li>
                <b>Healthcare Compliance:</b> Ensuring compliance with
                healthcare regulations, including HIPAA.
              </li>
              <li>
                <b>Remote Monitoring:</b> Enabling remote patient monitoring and
                chronic disease management.
              </li>
              <li>
                <b>Healthcare IoT:</b> Integrating IoT (Internet of Things)
                devices for healthcare data collection and monitoring.
              </li>
              <li>
                <b>Patient Engagement:</b> Creating patient engagement and
                health tracking applications.
              </li>
              <li>
                <b>Healthcare Workflow Automation:</b> Streamlining healthcare
                processes through automation.
              </li>
              <li>
                <b>Mental Health Tech:</b> Providing technology solutions for
                mental health support and therapy.
              </li>
              <li>
                <b>Healthcare Security:</b> Ensuring robust cybersecurity
                measures to protect patient data.
              </li>
              <li>
                <b>Healthcare AI and Machine Learning:</b> Applying AI and ML
                for diagnostics and predictive analytics.
              </li>
              <li>
                <b>Custom Healthcare Solutions:</b> Developing custom software
                and solutions to address unique healthcare challenges.
              </li>
              <li>
                <b>Healthcare Partnerships:</b> Collaborating with healthcare
                providers, hospitals, and medical research institutions to
                advance patient care.
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

export default Healthcare;
