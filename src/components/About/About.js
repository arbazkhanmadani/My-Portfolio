import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Linkedin from "./Linkedin";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import TectCertificate from "./Certificate";
import ImgAnimation from "../Home/ImgAnimation.module.css"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">EDUCATION AND INTREST</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} id={ImgAnimation.img1} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I utilize
        </h1>
        <Toolstack />

        <h1 className="project-heading" style={{marginbottom:"20px"}}>
          <strong className="purple">Certificates</strong> and <strong className="purple">Achievements</strong>
        </h1>
        <TectCertificate/>

        <h1 className="project-heading" style={{marginBottom:"40px"}}>My
          <strong className="purple"> Linkedin Profile</strong> 
        </h1>
        <Linkedin />
      </Container>
    </Container>
  );
}

export default About;
