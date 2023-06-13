import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ monthlyExpenses }) {
  let maxValue = Math.max(...monthlyExpenses.map((month) => month.value));
  return (
    <div className="chart">
      {monthlyExpenses.map((month) => (
        <ChartBar
          value={month.value}
          label={month.label}
          maxValue={maxValue}
          key={month.label}
        />
      ))}
    </div>
  );
}

export default Chart;
