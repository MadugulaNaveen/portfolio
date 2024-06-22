import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Madugula </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            I am currently a final year student at <a href="https://www.gvpce.ac.in/" target="_blank" rel="noreferrer">Gayatri Vidya Parishad College Of Engineering</a>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <ImStarFull /> Calisthenics
            </li>
            <li className="about-activity">
            <ImStarFull /> Video Editing
            </li>
            <li className="about-activity">
              <ImStarFull /> Documenting
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
