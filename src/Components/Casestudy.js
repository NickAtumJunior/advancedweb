import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Casestudy = () => {
  return (
    // first case study
    <div style={{
        width:'100%',
        paddingTop:'3em',
        paddingBottom:'3em'
    }}>
      <h1 style={{
        width:'100%',
        fontSize:'56px',
        marginBottom:'1em',
        textAlign:'center',
      }}>Case Studies</h1>
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
              and PrimeReact technologies, played a vital role in enhancing ABC
              Enterprises' workflow and team collaboration. This customized
              solution not only streamlined issue tracking but also provided a
              robust platform for future growth and integration with external
              systems, ultimately improving the overall efficiency of the
              organization.
            </p>
          </div>
          <button className="explore-btn-case-study">Explore more</button>
        </div>
      </div>
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
              and PrimeReact technologies, played a vital role in enhancing ABC
              Enterprises' workflow and team collaboration. This customized
              solution not only streamlined issue tracking but also provided a
              robust platform for future growth and integration with external
              systems, ultimately improving the overall efficiency of the
              organization.
            </p>
          </div>
          <button className="explore-btn-case-study">Explore more</button>
        </div>
      </div>
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
              and PrimeReact technologies, played a vital role in enhancing ABC
              Enterprises' workflow and team collaboration. This customized
              solution not only streamlined issue tracking but also provided a
              robust platform for future growth and integration with external
              systems, ultimately improving the overall efficiency of the
              organization.
            </p>
          </div>
          <button className="explore-btn-case-study">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
