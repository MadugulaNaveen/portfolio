import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-bg.gif";
import Particle from "../Particle";
import Type from "./Type";


function TopPart() {
  return (
      <Container fluid className="home-section" id="home">
        <Particle value={1500}/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
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

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingLeft:'10%'}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default TopPart;