import React, { useState } from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="nav">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}>
          <i>
            <h3 className="logo">Sahnawaz Hussain </h3>
          </i>
        </Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="hero" spy={true} smooth={true} offset={-45} duration={500}>
          <li onClick={() => setIsMobile(false)} className="tech-t">
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
          <li onClick={() => setIsMobile(false)} className="tech-t">
            About
          </li>
        </Link>
        <Link to="teck" spy={true} smooth={true} offset={-40} duration={500}>
          <li onClick={() => setIsMobile(false)} className="tech-t">
            Tech
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <li onClick={() => setIsMobile(false)} className="tech-t">
            Projects
          </li>
        </Link>
        <Link
          to="statistics"
          spy={true}
          smooth={true}
          offset={-40}
          duration={700}
        >
          <li onClick={() => setIsMobile(false)} className="tech-t">
            Statistics
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-40} duration={700}>
          <li onClick={() => setIsMobile(false)} className="tech-t">
            Contact
          </li>
        </Link>
      </ul>
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="mobile-menu-icon"
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
}
