import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const ProductDevelopment = () => {
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
            <a className="explore-btn-case-study" href="#Contact-Form">Explore more</a>
          </div>
        </div>
      </div>
      {/* explanation page starts here */}
      <div className="explanation-wrapper-product">
        <h1 className="explanation-wrapper-product-title">
          Our Excellence in ProductDevelopment Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          <h3>Benefits Of ProductDevelopment </h3>
          <p>
            <ol>
              <li>
                <b>Product Development Focus:</b> Specializing in comprehensive
                product development solutions, from concept to launch.
              </li>
              <li>
                <b>Product Strategy:</b> Developing product strategies,
                including market research, competitive analysis, and defining
                product vision.
              </li>
              <li>
                <b>Product Design:</b> Creating user-centric product designs,
                wireframes, and prototypes for intuitive and visually appealing
                user experiences.
              </li>
              <li>
                <b>Product Development:</b> Executing full-cycle product
                development, including coding, testing, and quality assurance.
              </li>
              <li>
                <b>Agile Development:</b> Embracing Agile methodologies for
                iterative and responsive product development.
              </li>
              <li>
                <b>Minimum Viable Product (MVP):</b> Building MVPs to quickly
                validate concepts and gather user feedback.
              </li>
              <li>
                <b>Scalability:</b> Designing products that can scale to
                accommodate increased user demand and growth.
              </li>
              <li>
                <b>Product Launch:</b> Planning and executing successful product
                launches, including marketing and user adoption strategies.
              </li>
              <li>
                <b>Product Maintenance:</b> Providing ongoing product
                maintenance, updates, and support to ensure product longevity.
              </li>
              <li>
                <b>Product Innovation:</b> Fostering a culture of innovation to
                continuously improve and evolve products.
              </li>
              <li>
                <b>User Feedback:</b> Collecting and analyzing user feedback to
                drive product enhancements and feature development.
              </li>
              <li>
                <b>Cross-Functional Teams:</b> Collaborating with
                cross-functional teams, including developers, designers, and
                product managers.
              </li>
              <li>
                <b>Quality Assurance:</b> Ensuring product quality through
                rigorous testing, bug tracking, and performance optimization.
              </li>
              <li>
                <b>Market Expansion:</b> Strategizing for market expansion and
                exploring new opportunities for product growth.
              </li>
              <li>
                <b>Custom Product Solutions:</b> Developing custom product
                solutions to meet unique business needs and requirements.
              </li>
              <li>
                <b>Product Roadmaps:</b> Creating and maintaining product
                roadmaps to align development with business objectives.
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

export default ProductDevelopment;
