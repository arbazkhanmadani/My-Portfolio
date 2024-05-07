import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiVercel,
  SiEclipseidese,
} from "react-icons/si";

import {
DiEclipse,
DiNpm,
DiHeroku
  
} from "react-icons/di";
function Toolstack() {
  return (
    <Row  style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title={"Window OS"} xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col title={"VSCode IDE"} xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4}  title={"Postman Api IDE"} md={2} className="tech-icons">
        <SiPostman/>
      </Col>
      <Col xs={4} title={"Vercel"} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col title={"Eclipse IDE"} xs={4} md={2} className="tech-icons">
        <DiEclipse  />
      </Col>
      <Col xs={4} title={"Node Package Manager"} md={2} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={4}  title={"heroku"} md={2} className="tech-icons">
        <DiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
