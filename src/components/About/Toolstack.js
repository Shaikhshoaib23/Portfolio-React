import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillWindows, AiOutlineAntDesign } from "react-icons/ai";
import {
  SiWindowsterminal,
  SiVisualstudiocode,
  SiTailwindcss
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineAntDesign />
      </Col>
    </Row>
  );
}

export default Toolstack;
