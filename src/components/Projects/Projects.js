import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wapp from "../../Assets/Projects/weatherapp.png";
import noteapp from "../../Assets/Projects/notesapp.png";
import portapp from "../../Assets/Projects/portfolio.png";
import todoapp from "../../Assets/Projects/totoapp.png";
import brapi from "../../Assets/Projects/bookreview.png";
import blog from "../../Assets/Projects/blog.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portapp}
              isBlog={false}
              title="folify"
              description="This is my personal portfolio for showcasing my skills. It is based on reactJs technology.
                            In this portfolio i showcase my skillsset, certificate, education and so much along with i added a contact form."
              ghLink="https://github.com/arbazkhanmadani/arbaz-khan-portfolio"
              demoLink="c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wapp}
              isBlog={false}
              title="cloudy"
              description="This is weather forcating application which is used to show the weather across the globe. This 
                            app is bases on HTML, CSS, Bootstarp, Javascipt and Ajax and also used APIs."
              ghLink="https://github.com/arbazkhanmadani/weather-forcaste-app"
              demoLink="https://arbazkhanmadani.github.io/weather-forcaste-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteapp}
              isBlog={false}
              title="notes me"
              description="This application is created for the help of students who can download free notes and study material related to their carriculam
                          .It is created with the help of HTML, CSS, Bootstrap, Javascipt, ES6."
              ghLink="https://github.com/arbazkhanmadani/arbazkhan-notes-aap"
              demoLink="https://arbazkhanmadani.github.io/arbazkhan-notes-aap/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="todo app"
              description="This app is used to manage the daily task of a person, here a person can add and remove thier tasks as per its need.
                          This app is created through HTML, CSS, Bootstarp, Javascipt."
              ghLink="https://github.com/arbazkhanmadani/todo-app"
              demoLink="https://arbazkhanmadani.github.io/todo-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Bloggy"
              description="In this website you can do blogging about technologies.IT is completly authenticated and authorised app lo manage large audience.
              This app is created using Java, Mysql, JDBC, Servlet, JSP, HTML, CSS. Bootstrap, JS, Ajax and Tomcate."
              ghLink="https://github.com/arbazkhanmadani/TechBlog"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brapi}
              isBlog={false}
              title="sentiment analysis for book review"
              description="This app is used to give book reviews and analys the sentiments as per likes and comments and then give recommendations.
              It is completely authenticated. It is based on HTML,CSS,Bootstrap,JS,Nodejs,Expressjs,MongoDB and Sentiment API"
              ghLink="https://github.com/arbazkhanmadani/BookReviewApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
