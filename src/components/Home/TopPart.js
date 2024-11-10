import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";


function TopPart() {
  return (
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: "4 em" }}>
                I'm
                <strong className="main-name"> Naveen Madugula</strong>
              </h1>

              <div className='typeWriter'>
                <Type />
              </div>
          </Row>
        </Container>
      </Container>
  );
}

export default TopPart;