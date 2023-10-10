import React from "react";
import { Carousel } from "antd";
import FirstImage from "../assets/1.jpg";
import SecondImage from "../assets/2.jpg";
import ThirdImage from "../assets/3.jpg";
import FourthImage from "../assets/4.jpg";

const CarouselComponent = () => (
  <Carousel autoplay>
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #a086f7d1, #5d38d73d),url(${FirstImage})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="carousel-inner">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
            }}
          >
            Innovation Journey <br /> Exploring the Future of Products
          </h1>
          <p
            style={{
              marginTop: "2%",
              color: "#f7f8ff",
            }}
          >
            Streamlining" in this context means making the innovation process
            more efficient, effective, and organized. It involves eliminating
            unnecessary steps, reducing bottlenecks, and optimizing workflows to
            ensure that innovation occurs smoothly and consistently
          </p>
          <button
            style={{
              marginTop: "2%",
            }}
            className="carosuel-btn"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    {/* // first on ends here/ */}
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #a086f7d1, #5d38d73d),url(${SecondImage})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="carousel-inner">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
            }}
          >
            Strategic Solutions for <br /> Sustainable Success.
          </h1>
          <p
            style={{
              marginTop: "2%",
              color: "#f7f8ff",
            }}
          >
            Unlock the path to sustainable success with our strategic solutions.
            We offer a comprehensive approach that goes beyond quick fixes,
             <br/>ensuring your business thrives in the long run.
          </p>
          <button
            style={{
              marginTop: "2%",
            }}
            className="carosuel-btn"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* /// second one ends here */}
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #a086f7d1, #5d38d73d),url(${ThirdImage})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="carousel-inner">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
            }}
          >
            Innovation Journey <br /> Exploring the Future of Products
          </h1>
          <p
            style={{
              marginTop: "2%",
              color: "#f7f8ff",
            }}
          >
            Streamlining" in this context means making the innovation process
            more efficient, effective, and organized. It involves eliminating
            unnecessary steps, reducing bottlenecks, and optimizing workflows to
            ensure that innovation occurs smoothly and consistently
          </p>
          <button
            style={{
              marginTop: "2%",
            }}
            className="carosuel-btn"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    {/* //// thirdone ends here */}
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #a086f7d1, #5d38d73d),url(${FourthImage})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="carousel-inner">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
            }}
          >
            Innovation Journey <br /> Exploring the Future of Products
          </h1>
          <p
            style={{
              marginTop: "2%",
              color: "#f7f8ff",
            }}
          >
            Streamlining" in this context means making the innovation process
            more efficient, effective, and organized. It involves eliminating
            unnecessary steps, reducing bottlenecks, and optimizing workflows to
            ensure that innovation occurs smoothly and consistently
          </p>
          <button
            style={{
              marginTop: "2%",
            }}
            className="carosuel-btn"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </Carousel>
);
export default CarouselComponent;
