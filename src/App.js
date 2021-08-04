import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Background from './components/Background';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Navbar';
import Card from './components/Card';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <Router>
      <div className="min-100-vh">
      <Background />
          <Navbar />
          


      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/">
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
