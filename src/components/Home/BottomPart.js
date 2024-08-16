import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function BottomPart() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 className="text-shadow" style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
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
        </Row>

        <Row>
          <Col md={12} className="home-about-social text-shadow">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MadugulaNaveen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naveen-madugula-29a623256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naveen_madugula_07/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default BottomPart;
