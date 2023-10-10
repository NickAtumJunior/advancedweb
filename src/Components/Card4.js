import { Col, Row } from 'antd'
import React from 'react'
import { HiViewGrid } from "react-icons/hi";

const Card4 = () => {
  return (
    <div className="card-4-holder">
        <Row
          style={{
            display: "flex",
            justifyContent:'space-around',
            
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Deticated Development <br/> Team</h1>
              <span className="card-4-inner-arrow"><HiViewGrid/></span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                Fast team building, flexible collaboration, and software
                engineers with proven expertise to give your project new
                superpowers.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>End-to-end software Development</h1>
              <span className="card-4-inner-arrow"><HiViewGrid/></span>
            </div>

            <div className="card-4-inner-two">
              <p>
                {" "}
                Full coverage of the development cycle, highly customized
                solutions, and partnership with the focus on your business
                goals.
              </p>
            </div>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>PoC/MVP Development</h1>
              <span className="card-4-inner-arrow"><HiViewGrid/></span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                Quick project start, well-calculated functionality, high return
                on investment in the product, and ample room for improvements.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} className="card-4-inner">
            <div className="card-4-inner-one">
              <h1>Legacy software <br/> modernization</h1>
              <span className="card-4-inner-arrow"><HiViewGrid/></span>
            </div>
            <div className="card-4-inner-two">
              <p>
                {" "}
                Flexible approach to replace and rethink outdated software
                solutions for scale and growth with the best cost-effectiveness.
              </p>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default Card4