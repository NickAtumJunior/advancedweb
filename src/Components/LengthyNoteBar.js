import { Col } from 'antd'
import React from 'react'

const LengthyNoteBar = () => {
  return (
     <Col
    xs={24}
    sm={24}
    md={8}
    lg={8}
    xl={8}
    style={{
      padding: "5em",
    }}
  >
    <p className="service-left-title">
      FocusR's <br />
      Comprehensive <br />
      Portfolio
    </p>
    <p className="service-left-para">
      Enabling organizations embrace digital transformation by providing
      innovative enterprise solutions
    </p>
    <p className="animative-arrow-service">&#10230;</p>
  </Col>
  )
}

export default LengthyNoteBar