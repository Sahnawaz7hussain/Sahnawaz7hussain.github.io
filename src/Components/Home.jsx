import React from "react";
import profilePic from "../Images/profile.jpg";
import "../Styles/Home.css";
export default function Home() {
  return (
    <div className="homeContainer" id="hero">
      <div className="headingContainer">
        <p>Hey I'm,</p>
        <h2>Sahnawaz Hussain</h2>
        <h1>Full Stack Web Developer.</h1>
        <button className="resumeBtn">RESUME</button>
      </div>
      <div className="profileContainer">
        <img className="profilePic" src={profilePic} alt="Profile Pic" />
      </div>
    </div>
  );
}
