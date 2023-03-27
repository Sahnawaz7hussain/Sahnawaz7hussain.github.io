import React, { Suspense } from "react";
import "../Styles/Projects.css";
import bewakoof from "../Images/bewakoofhomepage.png";
import myhours from "../Images/myhourshomepage.png";
// import rentomojo from "../Images/rentomojo.png";
import hello_bonsai from "../Images/hello_bonsai.png";
import cartWebsite from "../Images/CartFunctionality.png";
import MusicApp from "../Images/MusicApp.png";
import todoappp from "../Images/todoApp.png";
import { TbExternalLink } from "react-icons/tb";

// import { useState } from "react";
import LoadingComponent from "./LoadingComponent";
import { Link } from "react-router-dom";
const ImageComponent = React.lazy(() => import("./ImageComponent"));
export default function Projects() {
  // const [showP2, setShowP2] = useState(false);
  const projects = [
    {
      image: hello_bonsai,
      name: "hellobonsai.com",
      desc: "It's a freelance business management application that allows freelancers to work with clients.",
      techStack: "Reactjs | Reduxjs | NodeJs | Express MongoDB | ChakraUI",
      github: "https://github.com/AnkitParte/astute-line-8992",
      demo: "https://hellobonsai-deploy.vercel.app/",
    },
    {
      image: MusicApp,
      name: "Simple Music App",
      desc: " It's a Simple Music app Where user go through musics stored in our server. Focused on Filter and Sorting functionality.",
      techStack:
        "ReactJS | Reduxjs | json-server | styled-components | authentication",
      github: "https://github.com/Sahnawaz7hussain/Music-app",
      demo: "https://musicapp-rho.vercel.app/",
    },
    {
      image: bewakoof,
      name: "bewakoof.com",
      desc: " It's an ecommerce website in which user can buy clothes & kits.",
      techStack: "HTML | CSS | Javascript",
      github: "https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website",
      demo: "https://papaya-dango-552c77.netlify.app/",
    },

    {
      image: myhours,
      name: "myhours.com",
      desc: "It's a project management website in which users are managing their projects.",
      techStack: "React | ChakraUI | Router",
      github: "https://github.com/Sahnawaz7hussain/annoyed-wind-8656",
      demo: "https://annoyed-wind-8656.vercel.app/",
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
