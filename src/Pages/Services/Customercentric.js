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
          <h1>Elevate Customer Centric of Success.</h1>
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
          Your Customer Centric Partner Unlocking Growth Together
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
          <h3>Benefits Of Customer Centric</h3>
          <p>
            <ol>
              <li>
                <b>Customer Focus:</b> The primary focus is on the customer, and
                all activities are aligned to deliver value to the customer.
                Customer satisfaction and loyalty are top priorities.
              </li>
              <li>
                <b>Customer Understanding:</b> Organizations strive to gain deep
                insights into customer behavior, preferences, and pain points
                through data analysis, surveys, feedback, and market research.
              </li>
              <li>
                <b>Tailored Solutions:</b> Products and services are designed
                and customized to meet the specific needs and desires of
                different customer segments.
              </li>
              <li>
                <b>Effective Communication:</b> There is open and transparent
                communication with customers, addressing their concerns and
                providing assistance when needed.
              </li>
              <li>
                <b>Personalization:</b> Customization and personalization are
                used to create unique and relevant experiences for individual
                customers.
              </li>
              <li>
                <b>Continuous Improvement:</b> A commitment to ongoing
                improvement based on customer feedback and changing market
                dynamics.
              </li>
              <li>
                <b>Empowerment of Employees:</b> Employees are empowered to make
                decisions that benefit customers and are encouraged to think and
                act in ways that enhance the customer experience.
              </li>
              <li>
                <b>Accessibility:</b> Ensuring that customers can easily reach
                out for support or information through various channels, such as
                phone, email, chat, social media, and in-person interactions.
              </li>
              <li>
                <b>Measuring Customer Satisfaction:</b> Using key performance
                indicators (KPIs) and customer feedback to assess and monitor
                customer satisfaction and loyalty.
              </li>
              <li>
                <b>Building Customer Relationships:</b> Fostering long-term
                relationships with customers and understanding that customer
                value extends beyond a single transaction.
              </li>
              <li>
                <b>Flexibility and Adaptation:</b> Being flexible and willing to
                adapt strategies and offerings based on changing customer needs
                and market conditions.
              </li>
              <li>
                <b>Competitive Advantage:</b> Recognizing that a
                customer-centric approach can be a powerful competitive
                advantage in the marketplace.
              </li>
            </ol>
          </p>
        </div>

        {/* <div className="div-prod">
          <h3>Developers Stack</h3>
          
        </div> */}
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

/*

*/
