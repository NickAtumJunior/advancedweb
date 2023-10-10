import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Publicsector = () => {
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
          {/* <h3>Benefits Of Publicsector </h3> */}
          <p>
            <ol>
              <li>
                <b>Public Sector Focus:</b> Specializing in solutions tailored
                for the public sector and government organizations.
              </li>
              <li>
                <b>E-Government Services:</b> Developing e-government platforms
                for online citizen services and information access.
              </li>
              <li>
                <b>Government Portals:</b> Creating government portals for
                streamlined information dissemination and engagement.
              </li>
              <li>
                <b>Public Safety and Law Enforcement:</b> Providing technology
                solutions for public safety agencies, including emergency
                response systems.
              </li>
              <li>
                <b>Public Health Management:</b> Developing healthcare
                management systems for government health departments.
              </li>
              <li>
                <b>Education Technology (EdTech):</b> Enhancing education
                through technology, including e-learning platforms and student
                information systems.
              </li>
              <li>
                <b>Tax and Revenue Management:</b> Offering tax collection and
                revenue management systems for government finance departments.
              </li>
              <li>
                <b>Government Data Analytics:</b> Leveraging data analytics for
                policy planning, public health, and decision-making.
              </li>
              <li>
                <b>Citizen Engagement:</b> Enabling citizen engagement and
                feedback through digital channels and mobile apps.
              </li>
              <li>
                <b>Open Data Initiatives:</b> Supporting open data initiatives
                for transparency and accessibility of government data.
              </li>
              <li>
                <b>Custom Government Solutions:</b> Developing custom software
                and solutions to address unique public sector challenges.
              </li>
              <li>
                <b>Government Compliance and Security:</b> Ensuring compliance
                with government regulations and implementing robust
                cybersecurity measures.
              </li>
              <li>
                <b>Smart Cities and Urban Development:</b> Contributing to smart
                city initiatives through technology and data-driven solutions.
              </li>
              <li>
                <b>Digital Transformation:</b> Facilitating digital
                transformation in government processes and services.
              </li>
              <li>
                <b>Emergency Management Systems:</b> Developing systems for
                disaster response and emergency management agencies.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with government
                agencies, municipalities, and civic organizations to improve
                public services and governance.
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

export default Publicsector;
