import "./PieChart.css";
import React, { useEffect, useRef } from "react";

const PieChart = ({ data, title = "Pie Chart" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const total = data.reduce((acc, { value }) => acc + value, 0);
    let startAngle = 0;

    // Calculate pie chart dimensions
    const radius = Math.min(canvas.width, canvas.height) / 2;

    data.forEach(({ value, color, gender }) => {
      const endAngle = startAngle + (Math.PI * 2 * value) / total;
      const midAngle = (startAngle + endAngle) / 2;

      // Calculate position for text
      const textX = canvas.width / 2 + radius * 0.6 * Math.cos(midAngle); // Adjusted for text to appear closer to the center
      const textY = canvas.height / 2 + radius * 0.6 * Math.sin(midAngle); // Adjusted for text to appear closer to the center

      // Draw segment
      context.beginPath();
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        startAngle,
        endAngle
      );
      context.fillStyle = color;
      context.fill();
      context.closePath();

      // Calculate percentage
      const percentage = ((value / total) * 100).toFixed(1);

      // Draw text
      context.fillStyle = "black";
      context.font = "bold 14px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(
        `${gender.charAt(0).toUpperCase()}${gender.slice(1)} ${percentage}%`,
        textX,
        textY
      ); // Capitalize the first letter of gender

      startAngle = endAngle;
    });
  }, [data]);

  return (
    <div className="pie-chart">
      <h3>{title}</h3>
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
};

export default PieChart;
