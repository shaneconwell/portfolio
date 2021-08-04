import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Header from './components/Navbar';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>

      <Navbar />
      <AboutMe />
      <Footer />
      

    </div>
  );
}

export default App;
