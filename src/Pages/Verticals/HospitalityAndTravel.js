import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const HospitalityAndTravel = () => {
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
          Our Excellence in Hospitality And Travel
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of Hospitality And Travel </h3> */}
          <p>
            <ol>
              <li>
                <b>Hospitality and Travel Focus:</b> Specializing in solutions
                tailored for the hospitality and travel industry.
              </li>
              <li>
                <b>Hotel Management Systems:</b> Developing software for hotel
                reservations, bookings, and guest services.
              </li>
              <li>
                <b>Online Booking Platforms:</b> Creating online booking and
                reservation platforms for hotels and accommodations.
              </li>
              <li>
                <b>Travel Agency Solutions:</b> Offering technology solutions
                for travel agencies, including itinerary planning and booking.
              </li>
              <li>
                <b>Flight and Car Rental Booking:</b> Providing flight booking
                and car rental reservation systems.
              </li>
              <li>
                <b>Mobile Apps for Travelers:</b> Developing mobile applications
                for travelers, including travel guides and trip planners.
              </li>
              <li>
                <b>Customer Loyalty Programs:</b> Implementing customer loyalty
                and rewards programs for hotels and airlines.
              </li>
              <li>
                <b>Payment Processing:</b> Offering secure payment processing
                solutions for travel bookings.
              </li>
              <li>
                <b>Hotel Property Management:</b> Building property management
                systems for hotels and resorts.
              </li>
              <li>
                <b>Travel Booking Aggregators:</b> Creating platforms that
                aggregate travel options and compare prices.
              </li>
              <li>
                <b>Destination Marketing:</b> Promoting travel destinations
                through digital marketing and tourism websites.
              </li>
              <li>
                <b>Customer Reviews and Ratings:</b> Implementing review and
                rating systems for accommodations and services.
              </li>
              <li>
                <b>Hotel and Resort Spa Software:</b> Providing spa management
                and booking software for luxury accommodations.
              </li>
              <li>
                <b>Travel Expense Management:</b> Developing expense management
                tools for business travelers.
              </li>
              <li>
                <b>Travel Data Analytics:</b> Leveraging data analytics for
                travel trends and customer insights.
              </li>
              <li>
                <b>Custom Hospitality and Travel Solutions:</b> Developing
                custom software and solutions to address unique industry
                challenges.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with hotels, travel
                agencies, airlines, and tourism boards to enhance the travel
                experience.
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

export default HospitalityAndTravel;
