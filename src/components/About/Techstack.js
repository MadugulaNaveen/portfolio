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
      <div className="tech-icons">
        <DiJava />
      </div>
      <div className="tech-icons" aspectRatio={1}>
        <CgCPlusPlus />
      </div>
      <div className="tech-icons" aspectRatio={1}>
        <DiPython />
      </div>
    </Row>
    <Row>
      <h2 className="tech-heading">
            <strong>Web-Stack</strong>
      </h2>
      <div className="tech-icons">
        <DiHtml5 />
      </div>
      <div  className="tech-icons">
        <DiCss3 />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div  className="tech-icons">
        <DiDjango />
      </div>
      <div  className="tech-icons">
        <DiNodejs />
      </div>
      <div  className="tech-icons">
        <DiReact />
      </div>
      <div  className="tech-icons">
        <DiGit />
      </div>
      </Row>
    <Row >
      <h2 className="tech-heading">
            <strong className="purple">Databases</strong>
      </h2>
      <div  className="tech-icons">
        <SiMysql />
      </div>
      <div  className="tech-icons">
        <SiPostgresql />
      </div>
      <div  className="tech-icons">
        <DiMongodb />
      </div>
    </Row>
    </>
  );
}

export default Techstack;
