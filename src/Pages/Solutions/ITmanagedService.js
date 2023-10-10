import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const ITmanagedService = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>Elevate ITManaged Service of Success.</h1>
          <br />
          <p>
            We are a comprehensive IT ManagedService solution provider,
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
          Your ITmanagedService Unlocking Growth Together
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
          <h3>Benefits Of Data IT Managed Service</h3>
          <p>
            <ol>
              <li>
                <b>IT Management Focus:</b> Prioritizing comprehensive IT
                managed solutions for businesses, encompassing infrastructure,
                software, and support services.
              </li>
              <li>
                <b>Infrastructure Management:</b> Providing end-to-end
                management of IT infrastructure, including servers, networks,
                and data centers, to ensure reliability and performance.
              </li>
              <li>
                <b>Software Management:</b> Managing software systems,
                applications, and licenses to optimize performance, security,
                and compliance.
              </li>
              <li>
                <b>24/7 Monitoring:</b> Implementing continuous 24/7 monitoring
                of IT systems to proactively identify and address issues,
                minimizing downtime.
              </li>
              <li>
                <b>Security Management:</b> Ensuring robust cybersecurity
                measures, including threat detection, intrusion prevention, and
                data protection, to safeguard against cyber threats.
              </li>
              <li>
                <b>Cloud Solutions:</b> Offering cloud-based IT solutions,
                including migration, management, and optimization of cloud
                resources.
              </li>
              <li>
                <b>Backup and Disaster Recovery:</b> Implementing reliable
                backup and disaster recovery solutions to safeguard critical
                data and minimize downtime in case of emergencies.
              </li>
              <li>
                <b>IT Support Services:</b> Providing responsive IT support,
                including helpdesk services, remote assistance, and on-site
                support when needed.
              </li>
              <li>
                <b>Proactive Maintenance:</b> Conducting proactive maintenance
                to prevent IT issues, optimize system performance, and extend
                hardware lifespan.
              </li>
              <li>
                <b>Vendor Management:</b> Managing relationships with IT
                vendors, including procurement, contract negotiation, and vendor
                performance evaluation.
              </li>
              <li>
                <b>IT Strategy Alignment:</b> Aligning IT solutions with the
                organization's strategic goals and objectives.
              </li>
              <li>
                <b>Cost Optimization:</b> Optimizing IT costs through efficient
                resource utilization and cost-effective technology solutions.
              </li>
              <li>
                <b>Compliance:</b> Ensuring compliance with industry
                regulations, data privacy laws, and security standards.
              </li>
              <li>
                <b>IT Documentation:</b> Maintaining comprehensive documentation
                of IT systems, configurations, and processes for transparency
                and troubleshooting.
              </li>
              <li>
                <b>Scalability:</b> Designing IT solutions that can scale to
                accommodate business growth and evolving technology needs.
              </li>
              <li>
                <b>IT Training:</b> Providing training and knowledge transfer to
                internal staff to maximize the benefits of IT managed solutions.
              </li>
              <li>
                <b>Business Continuity:</b> Ensuring business continuity by
                minimizing IT disruptions and maintaining IT resilience.
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

export default ITmanagedService;

/*

*/
