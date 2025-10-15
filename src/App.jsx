import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import Kasahara from "./pages/kasahara";
import SoftwareDev from "./pages/dev";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ✅ Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          {/* ✅ Logo */}
          <Link to="/">
            <img src="/ziqrylogo.png" alt="Logo" className="logo" />
          </Link>
        </div>

        {/* ✅ Hamburger Button (visible on mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* ✅ Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link to="/kasahara" onClick={() => setMenuOpen(false)}>Kasahara</Link>
          <Link to="/software-dev" onClick={() => setMenuOpen(false)}>Software Dev</Link>
        </nav>
      </header>

      {/* ✅ Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/kasahara" element={<Kasahara />} />
        <Route path="/software-dev" element={<SoftwareDev />} />
      </Routes>
    </div>
  );
}
