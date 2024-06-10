import "./CardChart.css";
import React from "react";

const CardChart = ({ title, value }) => {
  return (
    <div className="card-chart">
      <h2 className="card-title">{title}</h2>
      <p className="card-value">{value}</p>
    </div>
  );
};
export default CardChart;
