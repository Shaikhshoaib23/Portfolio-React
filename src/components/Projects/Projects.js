import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import buss from "../../Assets/Projects/buss.png";
import DCode from "../../Assets/Projects/DCode.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import Cryp from "../../Assets/Projects/Cryp.png";

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
              imgPath={DCode}
              isBlog={false}
              title="DCode"
              description="DCode is a interesting platform for crypto traders who want to send or recieve cryptocurrencies(ETH coins) but with a twist. Users can also send a custom message and gif. So look forward to have a funny gif alonside your transaction.
              "
              ghLink="https://https://github.com/Shaikhshoaib23/DCode.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cryp}
              isBlog={false}
              title="Cryptology"
              description="Cryptology is a every beginners friend who are looking for a break in cryptocurrencies world. It contains all the information about the currenty cryptocurrencies and their market. it is connected to a redux cryptocurrency extension which helps it to be updated."
              ghLink="https://https://github.com/Shaikhshoaib23/cryptology.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buss}
              isBlog={false}
              title="Business.github.io"
              description="This website is just a skeleton of how a business website can be made. people can use this repo and add on their own styles and mechanism on it."
              ghLink="https://github.com/Shaikhshoaib23/business.github.io"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
