import { useEffect } from "react";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "../Styles/Statistics.css";

export default function Statistics() {
  let [wWidth, setWWidth] = useState(0);
  useEffect(() => {
    let windowWidth = window.innerWidth;
    setWWidth(windowWidth);
  }, []);
  return (
    <div id="statistics" className="main">
      <h1 className="heading">Statistics</h1>
      <hr className="line" />
      {/* GRAPTH
       */}
      <div className="statsPicBox">
        <img
          className="statsPic"
          src="https://github-readme-stats.vercel.app/api?username=sahnawaz7hussain&show_icons=true&locale=en&theme=radical"
          alt="sahnawaz7hussain"
        />
        <img
          className="statsPic"
          src="https://github-readme-streak-stats.herokuapp.com/?user=sahnawaz7hussain&theme=radical"
          alt="sahnawaz7hussain"
        />
      </div>
      <br />
      <br />
      <div className="second">
        <GitHubCalendar
          style={{
            color: "white",
          }}
          username="sahnawaz7hussain"
          year={"last"}
          blockMargin={4}
          blockRadius={8}
          blockSize={14}
          color={wWidth <= 480 ? "" : "#FD428D"}
          hideTotalCount={wWidth <= 480 ? true : false}
          fontSize={16}
          transformTotalCount={false}
        />
      </div>
      <div className="graph">
        <img
          className="graphPic"
          alt="Sahnawaz Hussain's Activity Graph"
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sahnawaz7hussain&theme=radical`}
        />
      </div>
    </div>
  );
}
