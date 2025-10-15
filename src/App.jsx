import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import Kasahara from "./pages/kasahara";
import SoftwareDev from "./pages/Dev";
import './App.css';


export default function App() {
  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/kasahara">Kasahara</Link>
        <Link to="/software-dev">Software Dev</Link>
      </nav>

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
