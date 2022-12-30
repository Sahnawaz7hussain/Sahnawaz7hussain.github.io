import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Navbar.css";
import profileLogo from "../Images/profile.jpg";
import shlogo from "../Images/sss.png";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [navBG, setNavGB] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setNavGB(true);
      } else {
        setNavGB(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let x = window.scrollY;
      if (x > 0 && x < 600) {
        setIsActive("home");
      } else if (x > 600 && x < 1200) {
        setIsActive("about");
      } else if (x > 1200 && x < 2000) {
        setIsActive("tech");
      }
      console.log("scrolll: ", x);
    });
  }, []);
  return (
    <div className={!navBG ? "nav navColor" : "nav"}>
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}>
          <i>
            {/* <h3 className="logo">Sahnawaz Hussain </h3> */}
            <img src={shlogo} className="logo" alt="logo" />
          </i>
        </Link>
      </div>
      <ul
        className={
          isMobile
            ? !navBG
              ? "nav-links-mobile navColor"
              : "nav-links-mobile"
            : "nav-links"
        }
      >
        <Link to="hero" spy={true} smooth={true} offset={-45} duration={500}>
          <li
            onClick={() => setIsMobile(false)}
            className={isActive === "home" ? "tech-t isActive" : "tech-t"}
          >
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
          <li
            onClick={() => setIsMobile(false)}
            className={isActive === "about" ? "tech-t isActive" : "tech-t"}
          >
            About
          </li>
        </Link>
        <Link to="teck" spy={true} smooth={true} offset={-40} duration={500}>
          <li
            onClick={() => setIsMobile(false)}
            className={isActive === "tech" ? "tech-t isActive" : "tech-t"}
          >
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
        <li className="tech-t">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://drive.google.com/file/d/1BWoSLBpHKFxYBiQAKRW2U7Z5fFSWVzHN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume <TbExternalLink />
          </a>
        </li>
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
