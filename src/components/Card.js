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
                      <div className="project-decription">
                        <p >{project.description}</p>
                        <button
                          id="github-button"
                          className="btn-primary m-2 position-absolute bottom-0 end-0 "
                        >
                          <img
                            src={`${project.github}`}
                            className="img-fluid"
                            alt="..."
                          ></img>
                        </button>
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
