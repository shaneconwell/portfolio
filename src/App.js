import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Background from "./components/Background";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <HashRouter basename='/'>
      <div className="min-100-vh">
        <Background />
        <Navbar />

        <Switch>
          {/* <Route exact path="/"component={Home} /> */}

          <Route exact path="/" component={About} />

          <Route exact path="/projects"component={Projects} />

          <Route exact path="/contact"component={Contact} />

          <Route exact path="/resume"component={Resume} />          

        </Switch>
        <Footer />
      </div>
      </HashRouter>

    // <div>
    //   <Navbar />
    //   <AboutMe />
    //
    // </div>
  );
}

export default App;
