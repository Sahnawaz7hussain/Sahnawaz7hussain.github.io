import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Teck from "../Components/Teck";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Statistics from "../Components/Statistics";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import ScrollIndicator from "../Components/ScrollIndicator";
const MainHome = () => {
  return (
    <div>
      <Navbar />
      <ScrollIndicator />
      <Home />
      <About />
      <Teck />
      <Projects />
      <Statistics />
      <Contact />
      {/* <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={40}
        fill="#fff"
        strokeColor="#fc4445"
        strokeWidth="6"
        smoothness={{
          movement: 0.7,
          scale: 0.1,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
      /> */}
    </div>
  );
};

export default MainHome;
