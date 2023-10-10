import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const RetailorconsumerProd = () => {
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
          Our Excellence in Reatail And Consume Products
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of RetailorconsumerProd </h3> */}
          <p>
            <ol>
              <li>
                <b>Retail and Consumer Products Focus:</b> Specializing in
                solutions tailored for the retail and consumer products
                industry.
              </li>
              <li>
                <b>Retail Point of Sale (POS) Systems:</b> Developing POS
                software for in-store sales and transactions.
              </li>
              <li>
                <b>E-commerce Platforms:</b> Creating e-commerce websites and
                platforms for online retail.
              </li>
              <li>
                <b>Inventory Management:</b> Offering inventory management
                solutions for tracking and restocking products.
              </li>
              <li>
                <b>Omni-channel Retail:</b> Enabling seamless shopping
                experiences across physical stores and online channels.
              </li>
              <li>
                <b>Mobile Shopping Apps:</b> Developing mobile applications for
                convenient shopping on smartphones.
              </li>
              <li>
                <b>Customer Loyalty Programs:</b> Implementing customer loyalty
                and rewards programs for retailers.
              </li>
              <li>
                <b>Retail Analytics:</b> Leveraging data analytics for sales
                analysis, demand forecasting, and customer insights.
              </li>
              <li>
                <b>Supply Chain Optimization:</b> Optimizing supply chain
                processes for efficient product distribution.
              </li>
              <li>
                <b>Product Recommendations:</b> Offering personalized product
                recommendations to enhance the shopping experience.
              </li>
              <li>
                <b>Click and Collect (BOPIS):</b> Enabling buy online, pick up
                in-store services for customers.
              </li>
              <li>
                <b>Consumer Product Packaging:</b> Providing packaging design
                and management solutions for consumer products.
              </li>
              <li>
                <b>Retail Compliance:</b> Ensuring compliance with retail
                industry regulations and standards.
              </li>
              <li>
                <b>Retail CRM:</b> Enhancing customer relationships and
                engagement through CRM solutions.
              </li>
              <li>
                <b>Custom Retail and Consumer Product Solutions:</b> Developing
                custom software and solutions to address unique industry
                challenges.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with retailers,
                consumer goods manufacturers, and technology providers to
                innovate in the retail and consumer products space.
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

export default RetailorconsumerProd;
