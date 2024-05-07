import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/p2 (2).png";
import Tilt from "react-parallax-tilt";
import ImgAnimation from "../Home/ImgAnimation.module.css"
import {
  AiFillGithub,
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <i>
                <b className="purple">I have a passion for DSA and Problem Solving</b>
              </i>
              <br />I am proficint in classics like
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building latest&nbsp;
              <i>
                <b className="purple">Web applications </b> and
                also in domain related to{" "}<br/>
                <b className="purple">
                  Data Analytics.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, ExpressJs and java Full Stack</b> and
              <i>
                <b className="purple">
                  {" "}
                  like to put my hands in Latest Technologies.
                </b>
              </i>
              &nbsp; I also like
              <i>
                <b className="purple"> React.js and Frontend Technologies</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid " id={ImgAnimation.img1} alt="avatar" width={300}/>
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
                  href="https://github.com/arbazkhanmadani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arbaz-khan-40b490228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/barbaad_engineer2001/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
