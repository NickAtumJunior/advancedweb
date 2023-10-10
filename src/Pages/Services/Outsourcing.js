import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Outsourcing = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>Elevating Outsourcing to Heights of Success.</h1>
          <br />
          <p>
            We are a comprehensive outsourcing service provider, specializing in
            end-to-end web and mobile application development. Our expertise
            lies in crafting customized software solutions precisely aligned
            with the unique demands of businesses. We excel in seamless
            integration with Oracle and SAP ERPs, driving efficiency in product
            development and fostering a culture of innovation.
          </p>
          <br />
          <br />
          <button className="primary-btn-cus2">Get Service</button>
        </div>
      </div>
      {/* first page ends here */}
      {/* explanation page starts here */}
      <div className="explanation-wrapper-product">
        <h1 className="explanation-wrapper-product-title">
          Your Outsourcing Partner Unlocking Growth Together
        </h1>
        <br />
        <br />

        {/* <div className="div-prod">
          <h3>Background</h3>
          <p>
            sought to develop a custom dealer portal application to streamline
            interactions between their dealers and the company. The goal was to
            provide dealers with an efficient platform for managing orders,
            accessing product information, and communicating with the
            distributor.
          </p>
        </div> */}

        <div className="div-prod">
          <h3>Benefits Of Outsourcing</h3>
          <p>
            <ol>
              <li>
                <b>Cost Savings :</b>
                <br />
                Outsourcing often allows businesses to reduce operational costs
                significantly. Outsourced labor may be more cost-effective than
                hiring and training in-house staff, especially for tasks that
                require specialized skills.
              </li>
              <li>
                <b>Access to Global Talent:</b>
                <br />
                Outsourcing opens the door to a global talent pool. Businesses
                can tap into the expertise and skills of professionals from
                around the world, ensuring high-quality work.
              </li>
              <li>
                <b> Focus on Core Competencies:</b>
                <br />
                Outsourcing non-core functions or tasks allows companies to
                concentrate on their core business activities and strategic
                goals. This can lead to improved efficiency and competitiveness.
              </li>
              <li>
                <b>Scalability:</b>
                <br />
                Outsourcing can be easily scaled up or down to match business
                needs. You can hire additional resources or reduce them as
                project requirements change.
              </li>
              <li>
                <b>Flexibility:</b>
                <br />
                Outsourcing provides flexibility in terms of project duration
                and workload. Businesses can initiate projects quickly and
                adjust resources based on project requirements.
              </li>
              <li>
                <b>Time Savings:</b>
                <br />
                By outsourcing tasks to experts, companies can complete projects
                more quickly and meet deadlines effectively. This can be
                especially important in industries with fast-changing technology
                or market demands.
              </li>
              <li>
                <b>Risk Mitigation:</b>
                <br />
                Outsourcing can help spread risk. When you partner with
                experienced outsourcing providers, they often have measures in
                place to mitigate risks and ensure project success.
              </li>
              <li>
                <b>Improved Quality:</b>
                <br />
                Outsourcing companies often specialize in specific areas and
                maintain high standards of quality. This can lead to better
                outcomes and customer satisfaction.
              </li>
            </ol>
          </p>
        </div>

        <div className="div-prod">
          <h3>Developers Stack</h3>
          <p>
            <ol>
              <li>
                <b>React Developer:</b>
                <br />
                Specializing in creating dynamic and responsive front-end user
                interfaces using the React framework.
              </li>
              <li>
                <b>Java Developer:</b>
                <br /> Proficient in back-end development using Java and Spring
                Boot, handling server-side logic and data storage.
              </li>
              <li>
                <b>Angular Developer:</b>
                <br /> Skilled in building robust web applications with Angular,
                a comprehensive framework for front-end development.
              </li>
              <li>
                <b>React Native Developer:</b>
                <br /> Experienced in developing cross-platform mobile
                applications with a single codebase using React Native.
              </li>
              <li>
                <b>Spring Boot Developer:</b>
                <br /> Adept at using the Java-based Spring Boot framework to
                create efficient and scalable server-side applications.
              </li>
              <li>
                <b>SAP Consultants:</b>
                <br /> Our team of experts provides SAP consulting services to
                streamline your business processes.
              </li>
              <li>
                <b>Oracle Functional Consultants:</b>
                <br /> Specializing in Oracle applications to optimize your
                business operations.
              </li>
              <li>
                <b>Oracle Technical Consultants:</b>
                <br /> Proficient in Oracle technologies to deliver tailored
                solutions.
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

export default Outsourcing;
