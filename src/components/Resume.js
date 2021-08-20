import React from "react";
import "../styles/Resume.css";
import {faGithub, faBootstrap, faCss3, faGit, faNodeJs, faHtml5, faSlack, faJs, faReact, faMarkdown, faUikit} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'

export default function Resume() {

  return (
  <div className="resume-body container-lg">
    <div className="row">
      <div>
        <div className="resumeLink">
        <a  href="https://docs.google.com/document/d/1iqCkhWRAmVXm-_uZu3ApJBBAyugf6hLADMBNrn268pI/edit?usp=sharing">
             Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
        </div>

        <div className="floatingIcons">

          
          <FontAwesomeIcon className="resumeIcon1" icon={faGithub} />
          <FontAwesomeIcon className="resumeIcon2" icon={faBootstrap} />
          <FontAwesomeIcon className="resumeIcon3" icon={faCss3} />

          <FontAwesomeIcon className="resumeIcon4" icon={faGit} />
          <FontAwesomeIcon className="resumeIcon5" icon={faNodeJs} />
          <FontAwesomeIcon className="resumeIcon6" icon={faHtml5} />
          <FontAwesomeIcon className="resumeIcon7" icon={faSlack} />

          <FontAwesomeIcon className="resumeIcon8" icon={faJs} />
          <FontAwesomeIcon className="resumeIcon9" icon={faReact} />
          <FontAwesomeIcon className="resumeIcon10" icon={faMarkdown} />

          <FontAwesomeIcon className="resumeIcon11" icon={faUikit} />
          <FontAwesomeIcon className="resumeIcon12" icon={faDatabase} />
          
        </div>
      </div>
    </div>   
  </div>
  );
}
