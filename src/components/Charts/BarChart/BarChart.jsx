import "./BarChart.css";
import React, { useEffect, useRef } from "react";

const BarChart = ({ data, title = "Bar Chart" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const barWidth = 50;
    const barMargin = 20;
    const maxValue = Math.max(...data.map((item) => item.value));
    const chartHeight = canvas.height - 50;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = index * (barWidth + barMargin);
      const y = chartHeight - barHeight;
      context.fillStyle = item.color;
      context.fillRect(x, y, barWidth, barHeight);
      context.fillStyle = "black";
      context.textAlign = "center";
      context.font = "bold 14px Arial";
      context.fillText(item.label, x + barWidth / 2, chartHeight + 20);
      context.fillText(item.value, x + barWidth / 2, y + barHeight / 2);
    });
  }, [data]);

  return (
    <div className="bar-chart">
      <h3>{title}</h3>
      <canvas ref={canvasRef} width={400} height={350} />
    </div>
  );
};

export default BarChart;
