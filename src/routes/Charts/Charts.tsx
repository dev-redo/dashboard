import React, { Component } from "react";

import RainFallBarChart from "../Charts/Shapes/RainFallBarChart";
import RainFallAreaChart from "../Charts/Shapes/RainFallAreaChart";
import TemperatureLineChart from "../Charts/Shapes/TemperatureLineChart";
import RainFallTemperatureComposedChart from "../Charts/Shapes/RainFallTemperatureComposedChart";
import DemographicPieChart from "../Charts/Shapes/DemographicPieChart";
import DailyReportChart from "./Shapes/DailyReportChart";
import StackedBarChart from "./Shapes/StackedBarChart";
const Charts: React.FC = () => {
  return (
    <div>
      {/* <StackedBarChart /> */}
      <DailyReportChart />
      <RainFallBarChart />
      <RainFallAreaChart />
      <TemperatureLineChart />
      <RainFallTemperatureComposedChart />
      <DemographicPieChart />

    </div>
  );
};

export default Charts;
