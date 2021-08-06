import React from "react";
import "../styles/About.css";
import headshot from "../img/headshot.jpg";

export default function About() {
  return (
    <div className="about-body container">
      <div className="d-flex justify-content-center flex-row ">
        <img
          src={headshot}
          className="headshot float-left"
          alt="..."
        ></img>
        <div className="p-4 ">
          <h1>Hi, I'm Shane!</h1>
          <p>
            Self motivated individual with a passion for developing innovative
            technologies. Full stack web developer whose professional career
            began as a studio <a className="link-light"href="https://www.shaneconwellmedia.com/">photographer</a>. Hard work ethic, keen attention to
            detail, and strong brand awareness. Motivated to combine the art of
            programming, with the passion to stay on top of tech trends,
            experiment with and learn new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
