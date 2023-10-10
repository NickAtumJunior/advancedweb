import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Cloud = () => {
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
          Our Excellence in Cloud Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          <h3>Benefits Of ApplicationMigration </h3>
          <p>
            <ol>
              <li>
                <b>Cloud Platform Expertise:</b> Specializing in cloud solutions
                on AWS (Amazon Web Services), GCP (Google Cloud Platform), and
                CI/CD (Continuous Integration/Continuous Deployment).
              </li>
              <li>
                <b>AWS Solutions:</b> Providing a wide range of services and
                solutions on AWS, including cloud infrastructure, storage, and
                serverless computing.
              </li>
              <li>
                <b>GCP Solutions:</b> Leveraging Google Cloud Platform for
                cloud-based solutions, data analytics, machine learning, and
                more.
              </li>
              <li>
                <b>CI/CD Implementation:</b> Implementing Continuous Integration
                and Continuous Deployment pipelines for automated software
                delivery and testing.
              </li>
              <li>
                <b>Cloud Migration:</b> Offering cloud migration services to
                move applications and data to AWS, GCP, or other cloud
                platforms.
              </li>
              <li>
                <b>Serverless Computing:</b> Utilizing serverless technologies
                on AWS and GCP for cost-effective, scalable, and event-driven
                applications.
              </li>
              <li>
                <b>Containerization:</b> Implementing containerization solutions
                with Docker and Kubernetes on cloud platforms for efficient
                application deployment.
              </li>
              <li>
                <b>Cloud Security:</b> Ensuring robust cloud security measures,
                including identity and access management (IAM), encryption, and
                compliance.
              </li>
              <li>
                <b>Cost Optimization:</b> Optimizing cloud costs through
                resource monitoring, auto-scaling, and strategic cloud usage
                planning.
              </li>
              <li>
                <b>Serverless CI/CD:</b> Implementing serverless CI/CD pipelines
                for automated code building, testing, and deployment.
              </li>
              <li>
                <b>Cloud Data Analytics:</b> Leveraging cloud-native data
                analytics tools and services for insights and business
                intelligence.
              </li>
              <li>
                <b>Infrastructure as Code (IaC):</b> Implementing IaC practices
                to manage and provision cloud resources efficiently.
              </li>
              <li>
                <b>Multi-Cloud Strategy:</b> Developing multi-cloud strategies
                to leverage AWS, GCP, and other cloud platforms for redundancy
                and flexibility.
              </li>
              <li>
                <b>Cloud DevOps:</b> Integrating cloud services and DevOps
                practices for faster application development and deployment.
              </li>
              <li>
                <b>Cloud Monitoring and Management:</b> Implementing tools and
                practices for cloud resource monitoring, management, and
                optimization.
              </li>
              <li>
                <b>CI/CD Automation:</b> Automating the CI/CD process for
                continuous integration and deployment of software applications.
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

export default Cloud;
