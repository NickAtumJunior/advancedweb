import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Contactform from "../../Components/Contactform";
import Footer from "../../Components/Footer";
import { FloatButton, Modal } from "antd";
import { RxVideo } from "react-icons/rx";
import { BiVideo, BiSolidBot, BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
const ApplicationMigration = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar here */}
      <Navbar />
      {/* First Page starts */}

      <div className="first-page-wrapper-product-dealerportal">
        <div className="inner-page-left-product-dealerportal">
          <h1>
            Elevate Application <br />
            Migration of Success.
          </h1>
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
          Your ApplicationMigration Unlocking Growth Together
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
          <h3>Benefits Of ApplicationMigration </h3>
          <p>
            <ol>
              <li>
                <b>Migration Focus:</b> Specializing in comprehensive
                application migration solutions, including assessment, planning,
                execution, and post-migration support.
              </li>
              <li>
                <b>Assessment and Planning:</b> Conducting thorough assessments
                of existing applications to determine migration feasibility,
                identify dependencies, and create migration strategies.
              </li>
              <li>
                <b>Cloud Migration:</b> Offering cloud migration services,
                including moving applications to public, private, or hybrid
                cloud environments.
              </li>
              <li>
                <b>Legacy System Migration:</b> Migrating applications from
                legacy systems to modern platforms to enhance performance,
                security, and scalability.
              </li>
              <li>
                <b>Data Migration:</b> Ensuring seamless and secure migration of
                data when moving applications to new environments.
              </li>
              <li>
                <b>Containerization:</b> Implementing containerization
                strategies, such as Docker and Kubernetes, for efficient
                application deployment and scaling.
              </li>
              <li>
                <b>Application Modernization:</b> Modernizing applications
                during migration to leverage the latest technologies and improve
                functionality.
              </li>
              <li>
                <b>Testing and Validation:</b> Conducting rigorous testing and
                validation to ensure that migrated applications function
                correctly and meet performance standards.
              </li>
              <li>
                <b>Post-Migration Support:</b> Providing ongoing support and
                maintenance services after migration to address issues and
                optimize application performance.
              </li>
              <li>
                <b>Minimizing Downtime:</b> Implementing strategies to minimize
                application downtime during migration to prevent disruptions to
                business operations.
              </li>
              <li>
                <b>Scalability:</b> Designing migration solutions that allow
                applications to scale easily as business needs evolve.
              </li>
              <li>
                <b>Cost Optimization:</b> Optimizing costs by choosing the most
                cost-effective migration strategies and cloud services.
              </li>
              <li>
                <b>Security and Compliance:</b> Ensuring that security measures
                and compliance requirements are maintained or improved during
                migration.
              </li>
              <li>
                <b>Documentation:</b> Creating comprehensive documentation of
                migration processes and configurations for future reference and
                troubleshooting.
              </li>
              <li>
                <b>User Training:</b> Providing training and support for
                end-users to ensure a smooth transition to migrated
                applications.
              </li>
              <li>
                <b>Risk Mitigation:</b> Identifying and mitigating risks
                associated with application migration to ensure a successful
                outcome.
              </li>
              <li>
                <b>Business Continuity:</b> Ensuring business continuity during
                and after migration by maintaining application availability and
                performance.
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

export default ApplicationMigration;

/*

*/
