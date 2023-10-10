import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const DealerPortal = () => {
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
          <button className="primary-btn-cus2">Get Product</button>
        </div>
      </div>
      {/* first page ends here */}
      {/* explanation page starts here */}
      <div className="explanation-wrapper-product">
        <h1 className="explanation-wrapper-product-title">
          Dealer Portal Application Development
        </h1>
        <br />
        <br />
        <div className="div-prod">
          <h3>Introduction</h3>
          <p>
            <li>
              <b>Client:</b>&nbsp;<span>XYZ Automotive Dealership</span>
            </li>
            <li>
              <b>Project:</b>&nbsp;<span>Dealer Portal Application</span>
            </li>
            <li>
              <b>Technology Stack:</b>
              &nbsp;
              <span>
                React, Java, Spring Boot, MUI (Material-UI), REST, Redux
              </span>
            </li>
          </p>
        </div>

        <div className="div-prod">
          <h3>Background</h3>
          <p>
            sought to develop a custom dealer portal application to streamline
            interactions between their dealers and the company. The goal was to
            provide dealers with an efficient platform for managing orders,
            accessing product information, and communicating with the
            distributor.
          </p>
        </div>

        <div className="div-prod">
          <h3>Project Objectives</h3>
          <p>
            <ol>
              <li>
                Create a web-based dealer portal application accessible from any
                modern web browser.
              </li>
              <li>
                Enable dealers to view and place orders for automobiles and
                spare parts.
              </li>
              <li>
                Provide dealers with real-time access to product catalogs,
                pricing, and availability.
              </li>
              <li>
                Implement secure authentication and authorization mechanisms.
              </li>
              <li>
                Facilitate communication between dealers and the distributor
                through messages and notifications.
              </li>
              <li>
                Support data synchronization with the company's internal systems
                through RESTful APIs.
              </li>
              <li>
                Utilize modern technologies and frameworks to ensure scalability
                and performance.
              </li>
              <li>
                Implement state management for efficient data handling and user
                experience.
              </li>
            </ol>
          </p>
        </div>

        <div className="div-prod">
          <h3>Technology Stack</h3>
          <p>
            <ol>
              <li>
                <b>React:</b> For creating a dynamic and responsive front-end
                user interface.
              </li>
              <li>
                <b>Java:</b> As the back-end technology using Spring Boot for
                handling server-side logic and data storage.
              </li>
              <li>
                <b>MUI (Material-UI):</b> A React component library for building
                visually appealing and consistent user interfaces.
              </li>
              <li>
                <b>RESTful APIs:</b> For seamless communication between the
                React front end and Java back end, enabling data exchange.
              </li>
              <li>
                <b>Redux:</b> As the state management library to efficiently
                handle application data and state changes.
              </li>
            </ol>
          </p>
        </div>
        <div className="div-prod">
          <h3 className="explanation-wrapper-produt-h3">
            User-Friendly Interface
          </h3>
          <p>
            <ul>
              <li>
                The MUI (Material-UI) component library provides a modern and
                visually appealing user interface design.
              </li>
              <li>
                The application is responsive, ensuring a consistent experience
                on various devices.
              </li>
            </ul>
          </p>
        </div>

        <div className="div-prod">
          <h3 className="explanation-wrapper-produt-h3">State Management</h3>
          <p>
            <ul>
              <li>
                Redux is used to manage the application's state efficiently,
                ensuring data consistency and a smooth user experience.
              </li>
            </ul>
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
        <FloatButton
          tooltip="Demo Video"
          icon={
            <BiVideo
              style={{
                color: "blue",
              }}
            />
          }
          onClick={() => setOpen(true)}
        />
      </FloatButton.Group>
      <Modal

        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="100%"
      >
        <div
          style={{
            width: "100%",
            height: "90vh",
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=GsqSZXAerdE"
            playIcon={<BiPlay />}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </Modal>
      <FloatButton.BackTop />
    </div>
  );
};

export default DealerPortal;
