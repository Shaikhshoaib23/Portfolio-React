import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import shoaib from "./Home";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Here is <span className="purple">My </span> Introduction
            </h1>
            <p className="home-about-body">
              I graduated with BSc CS in year 2022. In my three years of CS study 
              i learned and understood about the basics of programming and got 
              attracted to web development. As usual i first learned <b className="purple">HTML</b>, then
              <b className="purple"> CSS </b> and after that <b className="purple">JavaScript</b>. 
              Finally i Fell in love with <b className="purple">ReactJs </b>
                and its simplicity yet strong control.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS, Javascript & ReactJs. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">Websites and their looks/mechanisms </b> and
                also in how i can make my websites differentiate from others.
              </i>
              <br />
              <br />
              Whenever possible, I also venture into the world of
              <b className="purple"> Node.js</b> for developing products and also in
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Angular.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={require("./shoaib.png")} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shaikhshoaib23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaikh-shoaib-00132023a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
