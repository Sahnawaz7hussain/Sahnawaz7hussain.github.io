import React from "react";
import profilePic from "../Images/profile.jpg";
// import pdf from "../Images/Sahnawaz_Hussain_resume.pdf";
// import { HiDownload } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import "../Styles/Home.css";
export default function Home() {
  const onButtonClick = () => {
    fetch("Sahnawaz_Hussain_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Sahnawaz_Hussain_resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="homeContainer" id="hero">
      <div className="headingContainer">
        <p>Hello, I'm</p>
        <h2>Sahnawaz Hussain</h2>
        <h1>Full Stack Web Developer.</h1>
        <button onClick={onButtonClick} className="resumeBtn">
          Resume{" "}
          <span>
            <BiDownload
              style={{
                marginLeft: "8px",
                fontSize: "20px",
                // alignmentBaseline: "0px",
              }}
            />
          </span>
        </button>
      </div>
      <div className="profileContainer">
        <img className="profilePic" src={profilePic} alt="Hero Pic" />
      </div>
    </div>
  );
}
