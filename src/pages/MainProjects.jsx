import React from "react";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Projects.css";
import { Link } from "react-router-dom";
// thumbnails import
import MusicApp from "../Images/MusicApp.png";
import cartWebsite from "../Images/CartFunctionality.png";
import todoappp from "../Images/todoApp.png";
import finest from "../Images/finest.png";
import job_nest from "../Images/job_nest.png";
import chatzapp from "../Images/chatzapp.png";
// import hellobonzai from "../Images/hello_bonsai.png";

// projects
const MainProjects = () => {
  const projects = [
    {
      image: finest,
      name: "Finest (Ecom. website)",
      desc: "Finest is an online E-commerse retailer which sells fruits and vegetables online, from its own home lines and from a variety of different category. In this article we will conduct a brief website analysis of the BigBasket website.",
      techStack: "ReactJS | Redux | Nodejs | Expressjs | MongoDB | Chakra-ui",
      github: "https://github.com/Sahnawaz7hussain/dependent-account-1105",
      demo: "https://finest-frontend.vercel.app/",
    },
    {
      image: job_nest,
      name: "Job nest",
      desc: "This is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas. It offers multiple products like Resume Database Access, Job Listings.",
      techStack: "ReactJS | Redux | json-server | Chakra-ui",
      github: "https://github.com/Sahnawaz7hussain/job_nest",
      demo: "https://the-awesome-ajay-thakur-site-975bd.netlify.app",
    },
    {
      image: chatzapp,
      name: "ChatzApp",
      desc: "chatzApp is web application where users can chat each other and room chat, easy to use notifications system etc.",
      techStack:
        "ReactJS | Redux | Nodejs | Expressjs | MongoDB | React-bootstrap",
      github: "https://github.com/Sahnawaz7hussain/ChatzApp",
      demo: "https://chatzapp.vercel.app",
    },
    {
      image: MusicApp,
      name: "Simple Music App",
      desc: " It's a Simple Music app Where user go through musics stored in our server. Focused on Filter and Sorting functionality.",
      techStack: "ReactJS | Redux | json-server | styled-components",
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
          My Creative <span>Projects.</span>
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
              <img
                title={`Open ${item.name} in new tab`}
                className="commonPic"
                src={item.image}
                alt={item.name}
              />
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
