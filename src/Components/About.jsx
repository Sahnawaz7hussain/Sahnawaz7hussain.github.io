import React from "react";
import "../Styles/About.css";
import codeGif from "../Images/code.gif";
export default function About() {
  return (
    <div className="mainContainer" id="about">
      <h1 className="heading">About myself</h1>
      <hr className="line" />
      <div className="aboutContainer">
        <img className="codeGif" src={codeGif} alt="codeGif" />
        <div className="paraContainer">
          <p className="para">
            I'm a Full Stack Web Developer located in Bihar. I have serious
            passion for creating intuitive and dynamic websites with best
            features.{" "}
          </p>
          <p className="para">
            Well organised person, problem solver with high attention to details
            and ability to exploring and implementing new things,
          </p>
          <p className="para">
            Intrested In: Coding | Data Structure & Algorithms | Playing
            Badminton | Reading Books | Biographycal Movies.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
