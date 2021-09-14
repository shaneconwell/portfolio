import React from "react";
import "../styles/Card.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function Card(props) {
  return (
    <div className="project-body container">
      <div className="row">
        <div>
          <h1 id="projects" className="mb-3">
            Projects
          </h1>
          <div id="my-projects" className="mx-auto">
            <Container className=" project-container fluid">
              {/* <Row className="row  justify-content-around  my-5 "> */}
              {props.projects.map((project) => (
                <div className=" projectCard" key={project.id}>
                  {/* <Col> */}
                  <div className="projectLinks">
                    <a href={project.github}>
                      <img
                        src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628217627/GitHub-Mark-Light-64px_bphuev.png"
                        className="github p-2  bottom-0 end-0"
                        alt="..."
                      ></img>
                    </a>
                    <a
                      className="deployLink"
                      href={project.deploy}
                    >
                      LIVE DEMO
                    </a>
                  </div>
                  <div className="project-name">
                    <h4>{project.name}</h4>
                  </div>

                  <img
                    src={project.img}
                    className="projectImg p-4"
                    alt="..."
                  ></img>

                  <div className="project-decription ">
                    <p>{project.description}</p>
                  </div>

                  {/* </Col>
                  <Col> */}

                  <ul>
                    <li>{project.bp1}</li>
                    <li>{project.bp2}</li>
                  </ul>
                  <p className="projectTech">
                    Technologies Used: {project.tech}
                  </p>

                  {/* </Col> */}
                </div>
              ))}
              {/* </Row> */}
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
