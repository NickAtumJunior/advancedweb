import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const Ecommerce = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>Elevate Ecommerce of Success.</h1>
          <br />
          <p>
            We are a comprehensive Ecommerce(B2B,B2C) solution provider,
            specializing in end-to-end web and mobile application development.
            Our expertise lies in crafting customized software solutions
            precisely aligned with the unique demands of businesses. We excel in
            seamless integration with Oracle and SAP ERPs, driving efficiency in
            product development and fostering a culture of innovation.
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
          Your Ecommerce(B2B,B2C) Unlocking Growth Together
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
          <h3>Benefits Of Data Ecommerce(B2B,B2C)</h3>
          <p>
            <ol>
              <li>
                <b>E-commerce Focus:</b> Emphasizing e-commerce solutions for
                both B2B (business-to-business) and B2C (business-to-consumer)
                markets.
              </li>
              <li>
                <b>Customized B2B Solutions:</b> Providing tailored e-commerce
                platforms and features designed to meet the specific needs of
                B2B customers, including bulk ordering, account management, and
                integration with procurement systems.
              </li>
              <li>
                <b>User-Friendly B2C Experience:</b> Creating a user-friendly
                and visually appealing e-commerce experience for B2C customers,
                with features such as product recommendations, reviews, and
                seamless checkout.
              </li>
              <li>
                <b>Product Catalog Management:</b> Efficiently managing product
                catalogs, including adding, updating, and categorizing products
                for easy browsing and search.
              </li>
              <li>
                <b>Multi-Channel Selling:</b> Enabling businesses to sell across
                multiple channels, including websites, mobile apps,
                marketplaces, and social media platforms.
              </li>
              <li>
                <b>Inventory Management:</b> Implementing robust inventory
                management systems to track stock levels, prevent over-selling,
                and ensure timely restocking.
              </li>
              <li>
                <b>Payment Gateway Integration:</b> Integrating secure payment
                gateways to facilitate smooth and secure online transactions for
                both B2B and B2C customers.
              </li>
              <li>
                <b>Personalization:</b> Offering personalized shopping
                experiences, including product recommendations, targeted
                promotions, and dynamic content based on customer preferences.
              </li>
              <li>
                <b>Responsive Design:</b> Ensuring that e-commerce websites and
                apps are responsive and optimized for various devices and screen
                sizes.
              </li>
              <li>
                <b>Customer Support:</b> Providing customer support channels,
                such as live chat, email, and phone support, to assist customers
                with inquiries and issues.
              </li>
              <li>
                <b>Order Fulfillment:</b> Streamlining order fulfillment
                processes, including order processing, packaging, and shipping,
                to meet customer expectations.
              </li>
              <li>
                <b>Security and Compliance:</b> Implementing robust security
                measures to protect customer data and ensure compliance with
                data privacy regulations.
              </li>
              <li>
                <b>Analytics and Insights:</b> Utilizing data analytics to gain
                insights into customer behavior, sales trends, and website
                performance to make informed decisions.
              </li>
              <li>
                <b>Marketing and Promotion:</b> Running targeted marketing
                campaigns, promotions, and loyalty programs to attract and
                retain customers in both B2B and B2C segments.
              </li>
              <li>
                <b>Scalability:</b> Ensuring that e-commerce platforms can scale
                to handle increasing traffic and sales volumes as the business
                grows.
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

export default Ecommerce;

/*

*/
