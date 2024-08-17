import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import gifVideo from "../../Assets/bgVideo.gif";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
            <h1 className="text-shadow heading">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7}style={{justifyContent: "center"}} >
            <Aboutcard />
          </Col>
          <Col
            md={5} className="about-img">
            <img src={gifVideo} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h2 className="tech-heading">
          <strong>Tools</strong> I use
        </h2>
        <Toolstack />
      </Container>
      <Particle value={200}/>
    </Container>
  );
}

export default About;
