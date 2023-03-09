import React from "react";
// import pp from "../Images/profile.jpg";
import "../Styles/Home.css";
import "../Styles/About.css";
import "../Styles/Projects.css";
import "../Styles/Teck.css";
import "../Styles/Statistics.css";

const ImageComponent = ({ src, alt = "Image", className, title = "" }) => {
  return <img title={title} className={className} src={src} alt={alt} />;
};

export default ImageComponent;
