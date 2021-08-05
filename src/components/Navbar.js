import React from "react";
// import { Link } from "react-router-dom";
// Here we are importing a CSS file as a dependency
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="navbar navbar-expand-lg navbar-light align-self-end ">
      <div className="container justify-content-between ">
        <a
          className="col-4 navbar-brand angle"
          aria-current="page"
          href="#home"
          onClick={() => handlePageChange('Home')}
          // to="/react-portfolio/"
        >
          <h1>SHANE CONWELL</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                aria-current="page"
                href="#about"
                onClick={() => handlePageChange('About')}
                // to="/react-portfolio/about"
              >
                About Me{" "}
              </a>
              {/* <a >About Me</a> */}
            </li>
            <li className="nav-item">
              <a
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                aria-current="page"
                href="#/projects"
                onClick={() => handlePageChange('Projects')}
                // to="/react-portfolio/projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                aria-current="page"
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // to="/react-portfolio/contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // to="/react-portfolio/resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
