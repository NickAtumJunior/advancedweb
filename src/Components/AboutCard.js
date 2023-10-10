import React from 'react'
import GrowthGif from "../assets/icons8-growth.gif";
const AboutCard = () => {
  return (
    <div className="about_wrapper">
    <div className="about-left">
      <p className="a-l-title">
        WE REDEFINE WHAT'S POSSIBLE FOR YOU{" "}
        <span className="line">__________</span>
      </p>
      <h1 className="team-spirit">
        A PASSIONATE TEAM, LOOKING FOR IMPACTFUL CHALLENGES
      </h1>
      {/* free space for image */}
      <div className="about-img-holder">
        {/* just for hold the image */}
      </div>
    </div>
    <div className="about-right">
      <div className="a-r-first">
        <p>
          When started as a four friend's vision to transform the service
          industry 6 years ago,is now a thriving collective of 100+ people
          with a clientle spread across 40+ countries.
        </p>
      </div>
      <div className="a-r-second">
        <div className="second-left">
          <h3 className="about-para-head">ERP Software Consulting</h3>
          <p className="about-para">
            From system selection to project implementation, we walk through
            possible solutions/tools.
          </p>
        </div>
        <div className="second-right">
          <h3 className="about-para-head">Ecommerce Solutions</h3>
          <p className="about-para">
            Helping you create engaging, shoppable experiences regardless of
            brand size and type.
          </p>
        </div>
      </div>
      <div className="about-list">
        <ul className="a-tick-list">
          <li>1. Top ERP Consultants on Clutch</li>
          <li>2. Top Web Development Firms 202 - ITFirms</li>
          <li>3. India's Most Employee Centric Companies 2020</li>
        </ul>
        <div className="a-small-card">
          <h3>
            2015 <br />
            SINCE
          </h3>
          <div className="card-right">
            <img src={GrowthGif} alt="GIf" width="60%" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutCard