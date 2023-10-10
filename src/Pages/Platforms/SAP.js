import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const SAP = () => {
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
          <a className="primary-btn-cus2" href="#Contact-Form">
            Get Details
          </a>
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
          Our Excellence in SAP Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          <h3>Benefits Of SAP </h3>
          <p>
            <ol>
              <li>
                <b>SAP Expertise:</b> Specializing in SAP solutions,
                encompassing SAP ERP, SAP S/4HANA, SAP HCM, and more.
              </li>
              <li>
                <b>SAP Implementation:</b> Providing end-to-end SAP
                implementation services, including system design, configuration,
                and customization.
              </li>
              <li>
                <b>SAP S/4HANA Migration:</b> Expertise in migrating to SAP
                S/4HANA for enhanced performance, real-time insights, and
                streamlined processes.
              </li>
              <li>
                <b>SAP Integration:</b> Integrating SAP systems with other
                enterprise applications for seamless data flow and process
                automation.
              </li>
              <li>
                <b>SAP HCM (Human Capital Management):</b> Implementing SAP HCM
                solutions for workforce management, payroll, and HR processes.
              </li>
              <li>
                <b>SAP Fiori:</b> Designing user-friendly SAP Fiori applications
                for a modern and intuitive user experience.
              </li>
              <li>
                <b>SAP Analytics:</b> Leveraging SAP Analytics Cloud and SAP
                BusinessObjects for data analytics and reporting.
              </li>
              <li>
                <b>SAP Support and Maintenance:</b> Providing ongoing SAP
                support, system updates, and performance tuning.
              </li>
              <li>
                <b>SAP Security:</b> Ensuring robust SAP security measures,
                including role-based access control (RBAC) and audit logging.
              </li>
              <li>
                <b>SAP Cloud Solutions:</b> Implementing SAP cloud solutions,
                including SAP Cloud Platform and SAP SuccessFactors.
              </li>
              <li>
                <b>SAP Data Migration:</b> Migrating data to SAP systems while
                ensuring data accuracy and integrity.
              </li>
              <li>
                <b>Custom SAP Solutions:</b> Developing custom SAP applications
                and extensions to meet specific business needs.
              </li>
              <li>
                <b>SAP Training:</b> Offering SAP training programs for
                administrators, developers, and end-users.
              </li>
              <li>
                <b>Compliance and Governance:</b> Ensuring compliance with SAP
                licensing and governance policies.
              </li>
              <li>
                <b>SAP Reporting and Dashboards:</b> Creating SAP reporting
                solutions and dashboards for data visualization and
                decision-making.
              </li>
              <li>
                <b>SAP Business Process Optimization:</b> Optimizing business
                processes through SAP solutions for increased efficiency and
                productivity.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div id="Contact-Form">
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

export default SAP;
