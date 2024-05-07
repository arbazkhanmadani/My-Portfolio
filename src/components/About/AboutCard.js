import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arbaz Khan </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am web developer and problem solver.
            <br />
            <br/>
            <ImPointRight /><span className="purple">Graduation : </span> I'm pursuing Becholer of Technology in CSE <br/>
             from <span className="purple">LNCT</span> Indore.
            I will graduate in July <span className="purple">2024</span><br/>
           CGPA : <span className="purple">7.79</span>
            <br />
            <br/>
            <ImPointRight /> <span className="purple">Matrixs: </span> from IK Boys HS School Indore, MPBSE, 2020
            <br/>
            Percentage : <span className="purple">91 in PCM</span>
            <br/>
            <br/>
            <ImPointRight /> <span className="purple">High School : </span> from JK Memorial Convent Indore, MPBSE, 2018
            <br/>
            Percentage : <span className="purple">88</span>
            <br/>
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Putting my hands into cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "THE ONLY MANTRA OF MY LIFE IS CODING"{" "}
          </p>
          <footer className="blockquote-footer">ARBAZ KHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
