import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-body container-lg">
      <div className="row">
        <div>
          <a href="https://docs.google.com/document/d/1iqCkhWRAmVXm-_uZu3ApJBBAyugf6hLADMBNrn268pI/edit?usp=sharing">
             Resume 
          </a>
          <ul class="list-group skillList">
  <li class="list-group-item">Javascript</li>
  <li class="list-group-item">MongoDB</li>
  <li class="list-group-item">Express</li>
  <li class="list-group-item">React</li>
  <li class="list-group-item">Node.js</li>
</ul>
        </div>
      </div>
    </div>
  );
}
