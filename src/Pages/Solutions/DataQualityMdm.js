import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const DataQualityMdm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>Elevate DataQuality of Success.</h1>
          <br />
          <p>
            We are a comprehensive DataQuality & MDM solution provider, specializing in
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
          Your DataQuality & MDM Partner Unlocking Growth Together
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
          <h3>Benefits Of Data Quality & MDM</h3>
          <p>
            <ol>
              <li>
                <b>Data Quality Focus:</b> Prioritizing data quality to ensure
                that data is accurate, consistent, and reliable throughout the
                organization.
              </li>
              <li>
                <b>Master Data Management:</b> Implementing MDM solutions to
                centrally manage and maintain critical data, such as customer
                data, product data, and supplier data.
              </li>
              <li>
                <b>Data Cleansing:</b> Using data cleansing techniques to
                identify and correct errors and inconsistencies in data sets.
              </li>
              <li>
                <b>Data Governance:</b> Establishing data governance policies
                and practices to define roles, responsibilities, and data
                ownership within the organization.
              </li>
              <li>
                <b>Data Integration:</b> Integrating data from various sources
                and systems to create a unified and comprehensive view of data
                assets.
              </li>
              <li>
                <b>Data Quality Monitoring:</b> Continuously monitoring data
                quality to identify and address issues in real-time.
              </li>
              <li>
                <b>Scalability:</b> Ensuring that data quality and MDM solutions
                can scale to handle increasing volumes of data as the
                organization grows.
              </li>
              <li>
                <b>Data Security:</b> Implementing robust data security measures
                to protect sensitive information and ensure compliance with data
                privacy regulations.
              </li>
              <li>
                <b>Data Governance Framework:</b> Establishing a comprehensive
                framework for data governance that includes data policies,
                standards, and compliance mechanisms.
              </li>
              <li>
                <b>Data Quality Metrics:</b> Defining and tracking key data
                quality metrics to measure the effectiveness of data quality and
                MDM initiatives.
              </li>
              <li>
                <b>Improved Decision-Making:</b> Leveraging high-quality data to
                make informed business decisions and gain a competitive edge.
              </li>
              <li>
                <b>Compliance:</b> Ensuring compliance with industry regulations
                and standards, such as GDPR, HIPAA, or industry-specific data
                requirements.
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

export default DataQualityMdm;

/*

*/
