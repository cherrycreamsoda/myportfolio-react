import React from "react";
import "./GridPattern.css";

const GridPattern = ({
  squareSize = 2,
  lineColor = "rgba(255, 255, 255, 0.11)",
}) => {
  const style = {
    "--cell-size": `min(calc(100vh / ${squareSize}), calc(100vw / ${squareSize}))`,
    backgroundSize: "var(--cell-size) var(--cell-size)",
    backgroundImage: `
      linear-gradient(to right, ${lineColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
    `,
  };

  return <div className="grid-pattern" style={style}></div>;
};

export default GridPattern;
