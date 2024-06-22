import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiNotion,
} from "react-icons/si";

import { DiGithub } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{paddingBottom: "50px" }}>
      <Col xs={3} md={1} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
