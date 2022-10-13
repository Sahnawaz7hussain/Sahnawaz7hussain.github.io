import GitHubCalendar from "react-github-calendar";
import "../Styles/Statistics.css";

export default function Statistics() {
  const selectLastYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div id="statistics" className="main">
      <h1 className="heading">Statistics</h1>
      <hr className="line" />

      <div className="second">
        <GitHubCalendar
          style={{
            color: "white",
          }}
          username="sahnawaz7hussain"
          transformData={selectLastYear}
        />
      </div>
      <br />
      {/* GRAPTH  */}
      <div className="graph">
        <img
          className="graphPic"
          alt="Sahnawaz Hussain's Activity Graph"
          src={`https://activity-graph.herokuapp.com/graph?username=sahnawaz7hussain&bg_color=090514&color=dd9a05&line=dd9a05&point=dd9a05&hide_border=true`}
        />
      </div>
    </div>
  );
}
