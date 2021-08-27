import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer container-fluid position-absolute bottom-0 start-50 translate-middle-x">
      <div className="row ">
        <div className="footer-empty col-md-4">
        <a href="https://www.linkedin.com/in/shane-conwell-a4aa5ab3/">
          <img
            src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628219436/linkedin-3-xxl_sygyzq.png"
            className="footerLinkdin p-2 position-absolute bottom-0 start-0"
            alt="..."
          ></img>
          </a>
          </div>
        <div className="footer-copyright col-md-4">
          <p>
            {/* Copyright © 2021 Shane Conwell */}
            </p>
        </div>
        <div className="footer-social col-md-4">
        <a href="https://github.com/shaneconwell">
          <img
            src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628216401/GitHub_Logo_White_unai7m.png"
            className="footerGithub p-2 position-absolute bottom-0 end-0"
            alt="..."
          ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
