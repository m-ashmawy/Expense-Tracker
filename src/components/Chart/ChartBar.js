import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  console.log(Boolean(props.value));
  let barHeight = !props.value
    ? `0%`
    : `${Math.ceil((props.value / props.maxValue) * 100)}%`;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner " title={`$${props.value}`}>
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
