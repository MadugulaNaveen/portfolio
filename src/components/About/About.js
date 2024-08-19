import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
import gifVideo from "../../Assets/bgVideo.gif";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="text-shadow heading">
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <Row >
          <Col className="home-about-description">
              <p className="home-about-body">
                I can say myself to be a 🤷‍♂️
                <br/>
                <i>
                  <b className="purple">Jack Of All Trades but Master of None but sometimes better than the Master of One.</b>
                </i>
                <br />
                My field of Interests are of wide range starting with 
                <br />
                <i>
                  <b className="purple"> Development,Video Editing, Content Creation, Calisthenics </b> 
                </i>
                <br />
                <b> I keep on doing some random things at random hours not knowing what to do.</b>
              </p>
            </Col>
          <Col md={6} className="about-img">
            <img src={gifVideo} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="skillContainer">
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
