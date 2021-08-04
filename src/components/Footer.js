import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer container-fluid bg-dark">
      <div className="row ">
        <div className="footer-empty col-md-4"></div>
        <div className="footer-copyright col-md-4">
          <p>Copyright © 2021 Shane Conwell</p>
        </div>
        <div className="footer-social col-md-4">
        </div>
      </div>
    </div>
  );
}

export default Footer;
