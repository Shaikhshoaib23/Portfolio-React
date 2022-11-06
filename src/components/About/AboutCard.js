import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Shaikh shoaib </span>
            from <span className="purple"> Mumbai, Maharashtra</span>
            <br />I am a Graduate from Bachelor of Science in the field of <b className="purple">Computer Science</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Various Genre but my fav are Action, Adventure and Multiplayer)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech related news, Anime, reading manga and novels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The future holds what best for us only if we do our best in the present!"{" "}
          </p>
          <footer className="blockquote-footer">Shaikh shoaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
