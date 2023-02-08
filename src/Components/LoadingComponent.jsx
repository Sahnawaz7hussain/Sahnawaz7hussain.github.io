import React from "react";
import rolling from "../Images/Rolling.gif";

const LoadingComponent = ({ width = "auto", height = "auto" }) => {
  return (
    <div
      style={{
        minHeight: "400px",
        minWidth: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        // style={{ marginLeft: "50%", marginTop: "50%" }}
        width={width}
        height={height}
        src={rolling}
        alt="Image loading..."
      />
    </div>
  );
};

export default LoadingComponent;
