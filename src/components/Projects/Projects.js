import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              
              isBlog={false}
              title=" Counter Game"
              description="the game about the total will be greater thn ten ,you have to select three button ,if total will less than ten you lose the gaame  "
              ghLink="https://github.com/fintofpatel/game"
              demoLink="https://replit.com/@Fintofpatel/game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="fetch the github user"
              description="it will show about the user,their following, followers,public repo,private  repo etc."
              ghLink="https://github.com/fintofpatel/Fetchuser"
              demoLink="https://replit.com/@Fintofpatel/Fetchuser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Airport Security system with AI"
              description="It's about the security mechanism to stop ileagle things traafficing.it will detect the harmful object detections."
              ghLink="https://github.com/fintofpatel"
              demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;