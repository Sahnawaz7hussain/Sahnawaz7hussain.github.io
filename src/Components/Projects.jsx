import React, { Suspense } from "react";
import "../Styles/Projects.css";
import { TbExternalLink } from "react-icons/tb";
import perfumate from "../Images/perfumate.png";
import havesTales from "../Images/HavenTales.png";
import MusicApp from "../Images/MusicApp.png";
import finest from "../Images/finest.png";

// import { useState } from "react";
import LoadingComponent from "./LoadingComponent";
import { Link } from "react-router-dom";
const ImageComponent = React.lazy(() => import("./ImageComponent"));
export default function Projects() {
  const projects = [
    {
      image: perfumate,
      name: "Perfumate(solo)",
      desc: "Perfumate is an E-commerse web application where we can buy or sell perfumes online .",
      techStack: "Reactjs | Reduxjs | NodeJs | Express | MongoDB | ChakraUI",
      github: "https://github.com/Sahnawaz7hussain/perfumate",
      demo: "https://perfumate.vercel.app",
    },
    {
      image: havesTales,
      name: "HavenTales_blog(solo)",
      desc: "HavenTales is a blog web application where we can read blogs, write, edit and delete blog.",
      techStack: "HTML | CSS | Reactjs | Nodejs | Express | MongoDB",
      github: "https://github.com/Sahnawaz7hussain/HavenTales_blog",
      demo: "https://sh-blog-bay.vercel.app",
    },
    {
      image: finest,
      name: "Finest (group)",
      desc: "Finest is an online E-commerse retailer which sells fruits and vegetables online. Add products in cart, payment methods.",
      techStack: "ReactJS | Redux | Nodejs | Expressjs | MongoDB | Chakra-ui",
      github: "https://github.com/Sahnawaz7hussain/dependent-account-1105",
      demo: "https://finest-frontend.vercel.app/",
    },
    {
      image: MusicApp,
      name: "Music App(solo)",
      desc: " It's a Simple Music app Where user go through musics stored in our server. Focused on Filter and Sorting functionality.",
      techStack:
        "ReactJS | Reduxjs | json-server | styled-components | authentication",
      github: "https://github.com/Sahnawaz7hussain/Music-app",
      demo: "https://musicapp-rho.vercel.app/",
    },
  ];
  return (
    <div id="projects" className="pro">
      <h1 className="headingPro">My Projects</h1>
      <hr className="linePro" />
      <div className="allProjects">
        {projects.map((item) => (
          <div key={item.name} className="commonContainer">
            {/*PROJECT HERO IMAGE  */}
            <a
              className="atag"
              href={`${item.demo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img className="commonPic" src={item.image} alt={item.name} /> */}
              <Suspense fallback={<LoadingComponent />}>
                <ImageComponent
                  className={"commonPic"}
                  src={item.image}
                  alt={item.name}
                  title={`Open ${item.name} in new tab`}
                />
              </Suspense>
            </a>
            {/* PROJECT DETAILS BOX  */}
            <div className="projectDetails">
              {/* PROJECT NAME  */}
              <h1 className="projectHeading">{item.name}</h1>
              {/* PROJECT DESCRIPTION  */}
              <p className="projectPara">{item.desc}</p>
              {/* TECH STACHS USED IN PROJECT  */}
              <p className="teckStack">
                <span className="teckSpan">Tech Stack: </span>
                {item.techStack}
              </p>
              {/* GITHUB AND DEPLOYED BUTTONS BOX  */}
              <div className="linkingBtn">
                {/* DEPLOYED LINK BUTTON  */}
                <a
                  className="buttonsAnchor"
                  href={`${item.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="live">
                    <p>Demo</p>
                    <TbExternalLink />
                  </div>
                </a>
                {/* GIT HUB REPO BUTTON  */}
                <a
                  className="buttonsAnchor"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="live">
                    <p>Github</p>
                    <TbExternalLink />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link style={{ textDecoration: "none" }} to="/projects">
        <button
          title="See more projects."
          // className={`live atag`}
          style={{
            display: "block",
            margin: "auto",
            padding: "8px 12px",
            background: "#fc4445",
            border: "1px solid transparent",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          More projects
        </button>
      </Link>
    </div>
  );
}
