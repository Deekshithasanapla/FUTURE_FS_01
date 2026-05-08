import { useState } from "react";

import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">Deekshitha</h2>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            <FaUser /> About
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <FaProjectDiagram /> Projects
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FaEnvelope /> Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;