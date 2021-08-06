import React, { useState } from "react";

import Background from "./components/Background";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
export default function App() {
  const [currentPage, setCurrentPage] = useState("Projects");
  const renderPage = () => {
    // if (currentPage === "Home") {
    //   return <Home />;
    // }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="min-100-vh">
      <Background />

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <Footer />
    </div>
  );
}
