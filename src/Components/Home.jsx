import React, { Suspense } from "react";
import profilePic from "../Images/profile.png";
import { BiDownload } from "react-icons/bi";
import "../Styles/Home.css";
import LoadingComponent from "./LoadingComponent";
const ImageComponent = React.lazy(() => import("../Components/ImageComponent"));
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
        <button
          title="Download resume"
          onClick={onButtonClick}
          className="resumeBtn"
        >
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
        {/* <img className="profilePic" src={profilePic} alt="Hero Pic" /> */}
        <Suspense fallback={<LoadingComponent />}>
          <ImageComponent
            className={"profilePic"}
            src={profilePic}
            alt="Hero Image"
          />
        </Suspense>
      </div>
    </div>
  );
}
