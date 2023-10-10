import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Oracle = () => {
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
          <a className="primary-btn-cus2" href="#Contact-Form">Get Details</a>
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
          Our Excellence in Oracle Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          <h3>Benefits Of ApplicationMigration </h3>
          <p>
            <ol>
              <li>
                <b>Oracle Platform Expertise:</b> Specializing in Oracle
                platform solutions, encompassing database management,
                application development, and enterprise solutions.
              </li>
              <li>
                <b>Database Management:</b> Providing comprehensive Oracle
                database management services, including installation,
                configuration, optimization, and maintenance.
              </li>
              <li>
                <b>Application Development:</b> Developing and customizing
                applications using Oracle technologies, including Oracle APEX
                (Application Express) and PL/SQL.
              </li>
              <li>
                <b>Oracle Cloud Services:</b> Leveraging Oracle Cloud services
                for scalable and cost-effective solutions, including Oracle
                Cloud Infrastructure (OCI) and Oracle Cloud Applications.
              </li>
              <li>
                <b>Database Migration:</b> Offering database migration services
                to seamlessly move data and applications to Oracle databases.
              </li>
              <li>
                <b>Oracle E-Business Suite:</b> Implementing, upgrading, and
                optimizing Oracle E-Business Suite applications for streamlined
                business processes.
              </li>
              <li>
                <b>Oracle Fusion Middleware:</b> Leveraging Oracle Fusion
                Middleware to build and integrate enterprise applications for
                enhanced efficiency and performance.
              </li>
              <li>
                <b>Oracle BI and Analytics:</b> Implementing Oracle Business
                Intelligence (BI) and Analytics solutions for data-driven
                insights and reporting.
              </li>
              <li>
                <b>Oracle Security:</b> Ensuring robust security measures,
                including Oracle Advanced Security, to protect data and
                applications.
              </li>
              <li>
                <b>Oracle Integration:</b> Integrating Oracle applications and
                systems for seamless data flow and process automation.
              </li>
              <li>
                <b>Oracle Licensing:</b> Providing guidance on Oracle licensing,
                compliance, and cost optimization.
              </li>
              <li>
                <b>Oracle Support:</b> Offering Oracle support and maintenance
                services, including patch management and performance tuning.
              </li>
              <li>
                <b>Oracle Consulting:</b> Providing expert Oracle consulting
                services to optimize platform performance and ROI.
              </li>
              <li>
                <b>Oracle Training:</b> Offering training programs for IT
                professionals and end-users to maximize Oracle platform
                effectiveness.
              </li>
              <li>
                <b>Custom Solutions:</b> Developing custom solutions and
                extensions on the Oracle platform to meet specific business
                requirements.
              </li>
              <li>
                <b>Scalability:</b> Designing Oracle solutions that can scale to
                accommodate business growth and evolving technology needs.
              </li>
              <li>
                <b>Cost Optimization:</b> Optimizing Oracle platform costs
                through efficient resource utilization and strategic planning.
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

export default Oracle;
