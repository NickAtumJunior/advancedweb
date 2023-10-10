import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const MediaAndentertainment = () => {
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
          Our Excellence in Media And entertainment
        </h1>
        <br />
        <br />

        <div className="div-prod">
          {/* <h3>Benefits Of MediaAndentertainment </h3> */}
          <p>
            <ol>
              <li>
                <b>Media and Entertainment Focus:</b> Specializing in solutions
                tailored for the media and entertainment industry.
              </li>
              <li>
                <b>Content Management Systems (CMS):</b> Developing CMS for
                managing digital media content and publishing.
              </li>
              <li>
                <b>Video Streaming Platforms:</b> Creating video streaming
                platforms for live and on-demand content delivery.
              </li>
              <li>
                <b>OTT (Over-the-Top) Services:</b> Providing OTT solutions for
                delivering content via the internet.
              </li>
              <li>
                <b>Content Distribution:</b> Offering content distribution
                networks (CDNs) for global reach and scalability.
              </li>
              <li>
                <b>Digital Rights Management (DRM):</b> Implementing DRM
                solutions to protect content copyrights.
              </li>
              <li>
                <b>AdTech and Monetization:</b> Developing advertising
                technology and monetization strategies for media companies.
              </li>
              <li>
                <b>Live Event Streaming:</b> Enabling live event streaming for
                sports, concerts, and special events.
              </li>
              <li>
                <b>Media Analytics:</b> Leveraging data analytics for audience
                insights and content performance analysis.
              </li>
              <li>
                <b>Augmented and Virtual Reality (AR/VR):</b> Creating immersive
                experiences for gaming and entertainment.
              </li>
              <li>
                <b>Interactive Content:</b> Building interactive and gamified
                content for user engagement.
              </li>
              <li>
                <b>Music Streaming and Distribution:</b> Supporting music
                streaming services and digital distribution for artists.
              </li>
              <li>
                <b>Content Personalization:</b> Customizing content
                recommendations and user experiences.
              </li>
              <li>
                <b>Video Editing and Production:</b> Offering video editing and
                production software for content creators.
              </li>
              <li>
                <b>Social Media Integration:</b> Integrating social media
                sharing and engagement features.
              </li>
              <li>
                <b>Custom Media and Entertainment Solutions:</b> Developing
                custom software and solutions to address unique industry
                challenges.
              </li>
              <li>
                <b>Industry Partnerships:</b> Collaborating with media
                companies, content creators, and technology providers to
                innovate in the media and entertainment space.
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

export default MediaAndentertainment;
