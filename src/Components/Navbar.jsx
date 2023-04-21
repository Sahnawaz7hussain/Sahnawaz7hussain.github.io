import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Navbar.css";
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
      if (x > 0 && x < 525) {
        setIsActive("home");
      } else if (x > 600 && x < 1150) {
        setIsActive("about");
      } else if (x > 1160 && x < 1900) {
        setIsActive("tech");
      } else if (x > 1970 && x < 3330) {
        setIsActive("projects");
      } else if (x > 3340 && x < 4100) {
        setIsActive("statistics");
      } else if (x > 4180) {
        setIsActive("contact");
      }
      console.log("scrolll: ", x);
    });
  }, []);
  return (
    <div className={!navBG ? "nav navColor" : "nav"}>
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-80} duration={500}>
          <i>
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
        <Link to="hero" spy={true} smooth={true} offset={-75} duration={500}>
          <li
            title="Move to Home"
            onClick={() => setIsMobile(false)}
            className={isActive === "home" ? "tech-t isActive" : "tech-t"}
          >
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
          <li
            title="Move to About"
            onClick={() => setIsMobile(false)}
            className={isActive === "about" ? "tech-t isActive" : "tech-t"}
          >
            About
          </li>
        </Link>
        <Link to="teck" spy={true} smooth={true} offset={-50} duration={500}>
          <li
            title="Move to Skills"
            onClick={() => setIsMobile(false)}
            className={isActive === "tech" ? "tech-t isActive" : "tech-t"}
          >
            Skills
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <li
            title="Move to Projects"
            onClick={() => setIsMobile(false)}
            className={isActive === "projects" ? "tech-t isActive" : "tech-t"}
          >
            Projects
          </li>
        </Link>
        <Link
          to="statistics"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <li
            title="Move to Statistics"
            onClick={() => setIsMobile(false)}
            className={isActive === "statistics" ? "tech-t isActive" : "tech-t"}
          >
            Statistics
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-40} duration={700}>
          <li
            title="Move to Contact"
            onClick={() => setIsMobile(false)}
            className={isActive === "contact" ? "tech-t isActive" : "tech-t"}
          >
            Contact
          </li>
        </Link>
        <li className="tech-t">
          <a
            title="Open resume in new tab."
            style={{
              textDecoration: "none",
              color: "white",
            }}
            href="https://drive.google.com/file/d/1BWoSLBpHKFxYBiQAKRW2U7Z5fFSWVzHN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume{" "}
            <TbExternalLink fontSize={"15px"} style={{ marginLeft: "-5px" }} />
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
