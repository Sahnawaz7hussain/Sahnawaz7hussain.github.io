import React from "react";
import "../Styles/Projects.css";
import bewakoof from "../Images/bewakoofhomepage.png";
import myhours from "../Images/myhourshomepage.png";
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
            <span className="teckSpan"> Teck Stack:</span> HTML | CSS |
            Javascript
          </p>
          <div className="linkingBtn">
            <button className="live">Live</button>
            <button className="live">Github</button>
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
            <span className="teckSpan">Teck Stack:</span> React | ChakraUI |
            Router
          </p>
          <div className="linkingBtn">
            <button className="live">Live</button>
            <button className="live">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}
