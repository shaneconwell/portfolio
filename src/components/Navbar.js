import React from 'react';
import { Link } from 'react-router-dom';
// Here we are importing a CSS file as a dependency
import '../styles/Navbar.css';

function Navbar() {
  return (
<div className="navbar navbar-expand-lg navbar-light align-self-end ">
  <div className="container justify-content-between ">
  <Link className="col-4 navbar-brand angle" aria-current="page" href="#" to="/"><h1>SHANE CONWELL</h1></Link>
  
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  navBurger"></span>
    </button>
    <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#" to="/about">About Me </Link>
          {/* <a >About Me</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="#" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#" to="/resume">Resume</Link>
        </li>

      </ul>
    </div>
  </div>
</div>
  );
}

export default Navbar;
