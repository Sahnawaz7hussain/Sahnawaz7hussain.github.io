import React, { useEffect, useState } from "react";
import "../Styles/ScrollIndicator.css";
const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={!scrollTop ? "scollIndicatorNone" : "scollIndicator"}>
      <div style={{ width: `${scrollTop}%` }} className="progress"></div>
    </div>
  );
};

export default ScrollIndicator;
