import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Navbar.css';

function Navbar() {
  return (
<div className="navbar navbar-expand-lg navbar-light align-self-end bg-dark">
  <div className="container justify-content-between ">
    <a className="col-4 navbar-brand" href="#"><h1>SHANE CONWELL</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resume</a>
        </li>

      </ul>
    </div>
  </div>
</div>
  );
}

export default Navbar;
