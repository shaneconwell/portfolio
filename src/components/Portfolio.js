import React from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-body container-lg">
      <div className="row">
        <div>
          <h1
							id="projects"
							className="text-center " >
							Projects
						</h1>
        <div id="my-projects" className="container-fluid  mt-5">
					<div className=" project-container container   pb-5">

						<div className="row my-5 ">
							<div
								className={
									" card col-12 col-sm-12 col-md-4 "
								}>
								<div className="overlay">
									<div className="text">
										<h2>Movie Shelf</h2>
									</div>
									<div>
										<button
											id="name-button"
											className="btn-primary project-button">
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"card col-12 col-sm-12 col-md-4 " 
								}>
								<div className="overlay">
									<div className="text">
										<h2>Creative Corner</h2>
									</div>
									<div>
										<button
											id="name-button"
											className="btn-primary project-button"
											>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"card col-12 col-sm-12 col-md-4 "
								}>
								<div className="overlay">
									<div className="text">
										<h2>To Do List</h2>
									</div>
									<div>
										<button
											id="name-button"
											className="btn-primary">
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
      </div>
    </div>

  );
}
