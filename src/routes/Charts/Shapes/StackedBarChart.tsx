import React from "react";
import {
    ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { STACKED } from '../../../data/stacked-bar-data';
import { TooltipContainerStyles } from "../../../styles/constants/tooltipContainerStyles";
import ChartCard from '../../../components/ChartCard/ChartCard';
import ChannelReport from "../../../data/channel-report.json";

const StackedBarChart = () => {

  return (
    <ChartCard heading="스택 바!">
    <ResponsiveContainer width="100%" height={200}>
    <BarChart
      width={500}
      height={300}
      data={ChannelReport}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="cost" />
      <YAxis />
      <Tooltip contentStyle={TooltipContainerStyles} />
      <Legend />
      {/* <Bar dataKey={numNaver} stackId="a" fill="#8884d8" />
      <Bar dataKey={numGoogle} stackId="a" fill="#82ca9d" />
      <Bar dataKey={numFacebook} stackId="a" fill="#114b27" />
      <Bar dataKey={numKakao} stackId="a" fill="#2b96dd" /> */}
    </BarChart>
    </ResponsiveContainer></ChartCard>
  );
}
export default StackedBarChart;