import React from "react";
import "../styles/Card.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function Card(props) {
  return (
    <div className="projects-body text-center container-xlg">
      <div className="row">
        <div>
          <h1 id="projects" className=" mb-3">
            Projects
          </h1>
          <div id="my-projects" className=" mx-auto">
            <Container className=" project-container fluid   pb-5">
              {/* <Row className="row  justify-content-around  my-5 "> */}
              {props.projects.map((project) => (
                <Row className=" projectCard mx-2  " key={project.id}>
                  <Col>
                  <div className="project-name pt-2">
                      <h4>{project.name}</h4>
                    </div>
                    <Image
                      fluid
                      src={project.img}
                      className="projectImg p-4"
                      alt="..."
                    ></Image>

                    <div className="project-decription p-2">
                      <p>{project.description}</p>
                    </div>
               
                  </Col>
                  <Col>

                    <ul>
                      <li>
                      {project.bp1}
                      </li>
                      <li>
                      {project.bp2}
                      </li>
                      {/* <li>
                      {project.bp3}
                      </li> */}
                    </ul>
                    <p className="projectTech">Technologies Used: {project.tech}</p>
                    <a href={project.github}>
                      <img
                        src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628217627/GitHub-Mark-Light-64px_bphuev.png"
                        className="github p-2  bottom-0 end-0"
                        alt="..."
                      ></img>
                    </a>
                    <a
                      className="p-1 ps-2 deployLink bottom-0 start-0"
                      href={project.deploy}
                    >
                      DEMO
                    </a>
                  </Col>

                </Row>
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
