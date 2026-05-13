// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import { SiAboutdotme } from "react-icons/si";

function App() {
  return (
    <Router>
      {/* Navbar stays on top across all pages */}
      <Navbar />

      {/* Routes define which component to show for each URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
