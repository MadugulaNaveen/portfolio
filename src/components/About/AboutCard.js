import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
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
        </Row>
      </Container>
    </Container>
  );
}

export default AboutCard;
