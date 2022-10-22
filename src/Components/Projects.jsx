import React from "react";
import "../Styles/Projects.css";
import bewakoof from "../Images/bewakoofhomepage.png";
import myhours from "../Images/myhourshomepage.png";
// import rentomojo from "../Images/rentomojo.png";
import hello_bonsai from "../Images/hello_bonsai.png";
export default function Projects() {
  const projects = [
    {
      image: bewakoof,
      name: "bewakoof.com",
      desc: " It's an ecommerce website in which user can buy clothes & kits.",
      techStack: "HTML | CSS | Javascript",
      github: "https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website",
      demo: "https://papaya-dango-552c77.netlify.app/",
    },
    {
      image: hello_bonsai,
      name: "hellobonsai.com",
      desc: "It's a freelance business management application that allows freelancers to work with clients.",
      techStack: "HTML | CSS | Javascript",
      github: "https://github.com/AnkitParte/astute-line-8992",
      demo: "https://hellobonsai-deploy.vercel.app/",
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
      {projects.map((item) => (
        <div key={item.name} className="commonContainer">
          <img className="commonPic" src={item.image} alt={item.name} />
          <div className="projectDetails">
            <h1 className="projectHeading">Clone: {item.name}</h1>
            <p className="projectPara">{item.desc}</p>
            <p className="teckStack">
              <span className="teckSpan">Tech Stack: </span>
              {item.techStack}
            </p>
            <div className="linkingBtn">
              <button className="live">
                <a
                  className="atag"
                  href={`${item.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="live">
                <a
                  className="atag"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
