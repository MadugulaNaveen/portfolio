import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AutomateXerox"
              description="Automate Xerox is a full-stack web app simplifying document printing for students. It enables easy document uploads and notifies users when printing is complete, reducing wait times."
              ghLink="https://github.com/MadugulaNaveen/AutomateXerox"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HighLightsGenerator"
              description="Developed software using Django and Gemini, generating merged highlight videos with smooth transitions. Implemented using Django, Gemini, and Python video editing libraries, achieving a 30% reduction in video editing time compared to manual methods."
              ghLink="https://github.com/MadugulaNaveen/GDSC_WOW"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DatasetGenerator"
              description="Dataset Generator is used to synthesizes fake datasets for model building. Implemented using Webscraping, Prompt Engineering, Chatgpt API and integrated the backend with Django"
              ghLink="https://github.com/MadugulaNaveen/datasetGenerator"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
