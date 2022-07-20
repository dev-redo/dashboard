import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import { useRecoilValue } from "recoil";
import { dynamicChartData } from "../../store/charts";
import { overallData } from "../../store/global";

const OverallChart = () => {
  const dynamic = useRecoilValue(dynamicChartData);
  const overall = useRecoilValue(overallData)

  return (


 <ResponsiveContainer width="100%" height={300}>
  <LineChart
    data={overall}
    style={{ fontWeight: "bold" }}
    margin={{
      top: 20,
      right: 40,
      left: 30,
      bottom: 5,
    }}
  >
    <CartesianGrid
      vertical={false}
      stroke="#d6d9da"
      strokeDasharray="3 3"
    />
    <XAxis dataKey="date" tickLine={false} tickFormatter={(tickItem) => tickItem ? tickItem?.split('-')[1] + '월 ' + tickItem?.split('-')[2] + '일' : ""} />
    <YAxis
      width={35}
      axisLine={false}
      tickLine={false}
      domain={["auto", "auto"]}
    />
    <Tooltip cursor={false} contentStyle={TooltipContainerStyles} />
    <Legend verticalAlign="top" height={36}/>
    <Line
      type="monotone"
      dataKey={dynamic[0].firstData}
      stroke="#EF5B5B"
      name={dynamic[1].firstDataName}
      unit={dynamic[1].firstDataUnit}
    />
    <Line
      type="monotone"
      dataKey={dynamic[0].secondData}
      stroke="blue"
      name={dynamic[1].secondDataName}
      unit={dynamic[1].secondDataUnit}
    />
  </LineChart>
</ResponsiveContainer>

  );
};

export default OverallChart;
