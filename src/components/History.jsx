import React from "react";
import "../styles/History.css";

const history = [
  { year: "2010", detail: "Founded in Banglore." },
  { year: "2012", detail: "Launched our first innovative product." },
  { year: "2016", detail: "Expanded to 10+ countries." },
  { year: "2020", detail: "Hit 1 million customers." },
  { year: "2023", detail: "Became an industry leader." },
];

const History = () => {
  return (
    <div className="board">
      <h2>Our History</h2>
      <p>From a dream to a startup — a journey fueled by passion and purpose.</p>
      <div className="flex">
        {history.map((item, index) => (
          <div className="card" key={index}>
            <div className="year">{item.year}</div>
            <p className="desc">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
