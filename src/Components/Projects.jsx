import React from "react";
import "../Styles/Projects.css";
import bewakoof from "../Images/bewakoofhomepage.png";
import myhours from "../Images/myhourshomepage.png";
import rentomojo from "../Images/rentomojo.png";
export default function Projects() {
  return (
    <div id="projects" className="pro">
      <h1 className="headingPro">My Projects</h1>
      <hr className="linePro" />
      <div className="commonContainer">
        <img className="commonPic" src={bewakoof} alt="bewakoof.com" />

        <div className="projectDetails">
          <h1 className="projectHeading">Clone: bewakoof.com</h1>
          <p className="projectPara">
            It's an ecommerce website in which user can buy clothes & kits.
          </p>
          <p className="teckStack">
            <span className="teckSpan"> Tech Stack:</span> HTML | CSS |
            Javascript
          </p>
          <div className="linkingBtn">
            <button className="live">
              <a
                className="atag"
                href="https://papaya-dango-552c77.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </button>
            <button className="live">
              <a
                className="atag"
                href="https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website"
                target="_blank"
              >
                Gihub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="commonContainer">
        <img className="commonPic" src={rentomojo} alt="bewakoof.com" />

        <div className="projectDetails">
          <h1 className="projectHeading">Clone: rentomojo.com</h1>
          <p className="projectPara">
            India's leading rental platform brings to you a wide range of
            products on rent.
          </p>
          <p className="teckStack">
            <span className="teckSpan"> Tech Stack:</span> React | JSON-SERVER |
            Heroku
          </p>
          <div className="linkingBtn">
            <button className="live">
              <a
                className="atag"
                href="https://isnt-sahnawaz7hussain-awesome.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </button>
            <button className="live">
              <a
                className="atag"
                href="https://github.com/Sahnawaz7hussain/exultant-oatmeal-7307"
                target="_blank"
              >
                Gihub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="commonContainer">
        <img className="commonPic" src={myhours} alt="myhours.com" />

        <div className="projectDetails">
          <h1 className="projectHeading">Clone: myhours.com</h1>
          <p className="projectPara">
            It's a project management website in which users are managing their
            projects.
          </p>
          <p className="teckStack">
            <span className="teckSpan">Tech Stack:</span> React | ChakraUI |
            Router
          </p>
          <div className="linkingBtn">
            <button className="live">
              <a
                className="atag"
                href="https://annoyed-wind-8656.vercel.app/"
                target="-blank"
              >
                Demo
              </a>
            </button>
            <button className="live">
              <a
                className="atag"
                href="https://github.com/Sahnawaz7hussain/annoyed-wind-8656"
                target="_blank"
              >
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
