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
      <div className="tech-icons">
        <SiMacos />
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div  className="tech-icons">
        <SiNotion />
      </div>
      <div  className="tech-icons">
        <DiGithub />
      </div>
      <div  className="tech-icons">
        <SiVercel />
      </div>
      <div className="tech-icons">
        <SiPostman />
      </div>
    </Row>
  );
}

export default Toolstack;
