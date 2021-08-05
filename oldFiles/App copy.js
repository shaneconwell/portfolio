import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <Router>
      <div className="min-100-vh">
        <Background />
        <Navbar />

        <Switch>
          <Route path="/react-portfolio/about">
            <About />
          </Route>
          <Route path="/react-portfolio/projects">
            <Projects />
          </Route>
          <Route path="/react-portfolio/contact">
            <Contact />
          </Route>
          <Route path="/react-portfolio/resume">
            <Resume />
          </Route>

          <Route path="/react-portfolio/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

    // <div>
    //   <Navbar />
    //   <AboutMe />
    //
    // </div>
  );
}

export default App;
