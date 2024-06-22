import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <>
    <Row>
        <h2 className="tech-heading">
           <strong className="purple">Languages</strong>
        </h2>
      <Col xs={4} md={2}className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aspectRatio={1}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" aspectRatio={1}>
        <DiPython />
      </Col>
    </Row>
    <Row>
      <h2 className="tech-heading">
            <strong>Web-Stack</strong>
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      </Row>
    <Row >
      <h2 className="tech-heading">
            <strong className="purple">Databases</strong>
      </h2>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
