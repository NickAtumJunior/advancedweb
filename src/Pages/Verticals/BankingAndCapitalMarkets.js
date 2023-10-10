import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const BankingAndCapitalMarkets = () => {
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
          Our Excellence in Banking And CapitalMarkets Platforms
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Banking And CapitalMarkets </h3> */}
          <p>
            <ol>
              <li>
                <b>Banking and Capital Markets Focus:</b> Specializing in
                solutions tailored for the banking and capital markets
                industries.
              </li>
              <li>
                <b>Core Banking Systems:</b> Developing and modernizing core
                banking systems for improved efficiency and customer service.
              </li>
              <li>
                <b>Electronic Trading:</b> Creating electronic trading platforms
                and algorithms for capital markets.
              </li>
              <li>
                <b>Wealth Management:</b> Providing technology solutions for
                wealth management, including digital advisory and portfolio
                management.
              </li>
              <li>
                <b>Regulatory Compliance:</b> Ensuring compliance with financial
                regulations and reporting standards, such as Basel III and MiFID
                II.
              </li>
              <li>
                <b>Risk Management:</b> Developing risk assessment and risk
                mitigation tools for financial institutions.
              </li>
              <li>
                <b>Payment Solutions:</b> Creating secure and efficient payment
                processing systems and mobile payment apps.
              </li>
              <li>
                <b>Blockchain and Cryptocurrency:</b> Exploring blockchain
                technology and cryptocurrencies for financial innovation.
              </li>
              <li>
                <b>Capital Markets Analytics:</b> Leveraging data analytics for
                investment decisions and portfolio management.
              </li>
              <li>
                <b>Financial Software Integration:</b> Integrating financial
                software systems for streamlined operations and data flow.
              </li>
              <li>
                <b>Mobile Banking:</b> Developing mobile banking apps and
                digital banking solutions for customers on the go.
              </li>
              <li>
                <b>Financial Security:</b> Ensuring robust cybersecurity
                measures to protect financial data and transactions.
              </li>
              <li>
                <b>Algorithmic Trading:</b> Implementing algorithmic trading
                strategies for improved trading efficiency.
              </li>
              <li>
                <b>Customer Relationship Management (CRM):</b> Enhancing
                customer experiences through CRM solutions for personalized
                banking services.
              </li>
              <li>
                <b>Artificial Intelligence (AI) and Machine Learning (ML):</b>{" "}
                Applying AI and ML to optimize financial processes, fraud
                detection, and customer insights.
              </li>
              <li>
                <b>Custom Financial Solutions:</b> Developing custom software
                and solutions to address unique challenges within the financial
                industry.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with financial
                institutions, regulatory bodies, and fintech companies to drive
                innovation.
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

export default BankingAndCapitalMarkets;
