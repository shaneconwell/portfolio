import React from "react";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="projects-body text-center container-xlg">
      <div className="row">
        <div>
          <h1 id="projects" className=" mb-3">
            Projects
          </h1>
          <div id="my-projects" className=" mx-auto">
            <div className=" project-container container   pb-5">
              <div className="row  justify-content-around  my-5 ">
                {props.projects.map((project) => (
                  <div
                    className=" card mx-2  col-xs-12  col-md-5 col-lg-3 "
                    key={project.id}
                  >
                    <div className="p-2 py-4">
                      <img
                        src={project.img}
                        className="img-fluid"
                        alt="..."
                      ></img>
                      <div className="project-name">
                        <h4>{project.name}</h4>
                      </div>
                      <div className="project-decription p-2">
                        <p >{project.description}</p>

                          <a href={project.github}>
                          <img
                            src= "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628217627/GitHub-Mark-Light-64px_bphuev.png"
                            className="github p-2 position-absolute bottom-0 end-0"
                            alt="..."
                          ></img>
                          </a>
                          <a className="p-1 ps-2 deployLink position-absolute bottom-0 start-0" href={project.deploy}>LINK</a>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
