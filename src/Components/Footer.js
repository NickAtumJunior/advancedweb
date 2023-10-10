import { Col, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <Row style={{
          marginTop:'8em'
      }}>
        <Col
          style={{
            backgroundColor: "#000",
          
          }}
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
        >
          <ul className="Footer-Menu">
            <li className="Heading-Menu-Footer">Services</li>
            <li className="normal-f">Application Development</li>
            <li className="normal-f">ERP Services</li>
            <li className="normal-f">API Services</li>
            <li className="normal-f">Sustainability</li>
            <li className="normal-f">Customer Centric - CRM</li>
            <li className="normal-f">Web Application Development</li>
            <li className="normal-f">Mobile Application Development</li>
            <li className="normal-f">Testing</li>
          </ul>
        </Col>
        <Col
          style={{
            backgroundColor: "#000",
          }}
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
        >
          <ul className="Footer-Menu">
            <li className="Heading-Menu-Footer">Expertise</li>
            <li className="normal-f">Marketplace</li>
            <li className="normal-f">Business Solutions</li>
            <li className="normal-f">Energy</li>
            <li className="normal-f">Outsourcing</li>
            <li className="normal-f">Implemention</li>
            <li className="normal-f">Upgrade</li>
            <li className="normal-f">Engineering</li>
          </ul>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
          style={{
            backgroundColor: "#000",
          }}
        >
          <ul className="Footer-Menu">
            <li className="Heading-Menu-Footer">Insights</li>
            <li className="normal-f">Cost to develop an app</li>
            <li className="normal-f">How to build ridesharing</li>
            <li className="normal-f">Build a streaming app</li>
            <li className="normal-f">CRM for Agriculture</li>
            <li className="normal-f">How to build a CRM</li>
            <li className="normal-f">Web design process</li>
          </ul>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
          style={{
            backgroundColor: "#000",
          }}
        >
          <ul className="Footer-Menu">
            <li className="Heading-Menu-Footer">Office</li>
            <li className="location-f">
              Corporate Office
              <br />
              Chennai
            </li>
            <li className="location-f">
              Competency & Product Division
              <br />
              Salem
            </li>
            <li className="location-f">
              Digital & AI Technologies
              <br />
              Malaysia
            </li>
            <li className="location-f">
              Digital Transformation
              <br />
              USA
            </li>
            <li className="location-f">
              Consultancy and Technology
              <br />
              UAE
            </li>
          </ul>
        </Col>
      </Row>
      {/* normal navigatoion closed */}
      {/* <Row style={{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#000',
        position:'relative',
        top:'10%'
      }}>
        <ul className="bottom-footer-one">
          <li className="Link-Footer">FocusR</li>
        </ul>
        <ul className="bottom-footer-two">
          <li className="Link-Footer">Facebook</li>
          <li className="Link-Footer">Linkedin</li>
          <li className="Link-Footer">Instagram</li>
          <li className="Link-Footer">Twitter</li>
        </ul>
      </Row> */}
      {/* <Row style={{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#000',
        position:'relative',
        top:'20%'
      }}>
        <ul className="bottom-footer-three">
          <li className="Link-Footer-three">© FocusR 2011-2023. All rights reserved</li>
        </ul>
        <ul className="bottom-footer-four">
          <li className="Link-Footer-four">Privacy Policy</li>
          <li className="Link-Footer-four">Terms & Conditions</li>
        </ul>
      </Row> */}
    </div>
  );
};

export default Footer;
