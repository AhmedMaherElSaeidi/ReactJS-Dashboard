import "./DonutChart.css";
import React, { useEffect, useRef } from "react";

const DonutChart = ({ data, title = "Donut Chart" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const total = data.reduce((acc, { value }) => acc + value, 0);
    let startAngle = 0;

    data.forEach(({ value, color, label }) => {
      const endAngle = startAngle + Math.PI * 2 * (value / total);
      const midAngle = (startAngle + endAngle) / 2;

      // Draw inner arc
      context.beginPath();
      context.arc(centerX, centerY, radius * 0.6, endAngle, startAngle, true);
      context.strokeStyle = color;
      context.lineWidth = radius * 0.4;
      context.stroke();

      // Calculate position for text
      const textX = centerX + radius * 1 * Math.cos(midAngle); // Adjusted radius to move text slightly outside
      const textY = centerY + radius * 1 * Math.sin(midAngle); // Adjusted radius to move text slightly outside

      // Rotate context for text
      context.save(); // Save the current state of the context
      context.translate(textX, textY); // Move the origin to the text position
      context.rotate(Math.PI / 4); // Rotate the context by 90 degrees counter-clockwise
      context.fillStyle = "black";
      context.font = "bold 14px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(label, 0, 0); // Draw text at (0, 0)
      context.restore(); // Restore the saved state of the context

      startAngle = endAngle;
    });
  }, [data]);

  return (
    <div className="donut-chart">
      <h3>{title}</h3>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

export default DonutChart;
