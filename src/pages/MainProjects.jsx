import React from "react";
import MusicApp from "../Images/MusicApp.png";
import cartWebsite from "../Images/CartFunctionality.png";
import todoappp from "../Images/todoApp.png";
import "../Styles/Projects.css";
import { TbExternalLink } from "react-icons/tb";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const MainProjects = () => {
  const projects = [
    {
      image: MusicApp,
      name: "Simple Music App",
      desc: " It's a Simple Music app Where user go through musics stored in our server. Focused on Filter and Sorting functionality.",
      techStack: "ReactJS | Redux | json-server",
      github: "https://github.com/Sahnawaz7hussain/Music-app",
      demo: "https://musicapp-rho.vercel.app/",
    },
    {
      image: cartWebsite,
      name: "Product Website",
      desc: "It's a Simple Product website. Focused on complete cart functionality.",
      techStack: "ReactJS | Redux | json-server",
      github: "https://github.com/Sahnawaz7hussain/product-website",
      demo: "https://product-webiste.vercel.app/",
    },
    {
      image: todoappp,
      name: "Todo App",
      desc: "It's a basic Todo App In this App User Can do complete CRUD operation.",
      techStack: "ReactJS | ContextAPI | json-server",
      github: "https://github.com/Sahnawaz7hussain/Todo_crud_with_context_api",
      demo: "https://todo-crud-nine.vercel.app/",
    },
  ];
  return (
    <div id="projects" className="pro">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 className="allProjectsHeading">
          My Creative <span>Projects </span>
          <BsFillTriangleFill fontSize={"16"} />
        </h1>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <h1 className="allProjectsHeading">Home</h1>
        </Link>
      </div>

      <div className="allProjects">
        {projects.map((item) => (
          <div key={item.name} className={"commonContainer"}>
            <a
              className="atag"
              href={`${item.demo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="commonPic" src={item.image} alt={item.name} />
              {/* <Suspense fallback={<LoadingComponent />}>
                <ImageComponent
                  className={"commonPic"}
                  src={item.image}
                  alt={item.name}
                  title={"Open link in new tab."}
                />
              </Suspense> */}
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
    </div>
  );
};

export default MainProjects;
