import React from "react";
import "../styles/Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import {FaSmileBeam, FaExternalLinkAlt , FaLinkedin , FaGithub, FaAt, FaPhoneAlt} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container-lg">
      {/* <div className="row"> */}
	 
      <Row className="contact-body">
	  {/* <Col> 
	  <FaSmileBeam className="contact-smile" />
	  </Col> */}
	   <h1 className="contact-header">Hey Lets Talk!</h1>
        <Col className="contact-resume">
		<ul className="list-unstyled">
            <li>
              <a href="mailto:sconwell.dev@gmail.com">
			  <FaAt /> sconwell.dev@gmail.com 
			  </a>
            </li>
            <li>
              <a href="tel:+12152647117">
			  <FaPhoneAlt /> 215 264 7117
			  </a>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <a href="https://docs.google.com/document/d/1frm8bVlzhmVL_7a2pY48iDWl1KenFdaXcwdb1Xo7LQo/edit?usp=sharing">
                <FaExternalLinkAlt /> Resume
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1frm8bVlzhmVL_7a2pY48iDWl1KenFdaXcwdb1Xo7LQo/edit?usp=sharing">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1frm8bVlzhmVL_7a2pY48iDWl1KenFdaXcwdb1Xo7LQo/edit?usp=sharing">
                <FaGithub /> Github
              </a>
            </li>
          </ul>
        </Col>

      </Row>
      {/* </div> */}
    </div>
  );
}
