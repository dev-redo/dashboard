import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import { useRecoilValue } from "recoil";
import { dynamicChartData } from "../../store/charts";
import { overallData } from "../../store/global";

const OverallDashChart = () => {
  const dynamic = useRecoilValue(dynamicChartData);
  const overall = useRecoilValue(overallData)

  return (

      <ResponsiveContainer width="100%" height={300}>
                <LineChart
          width={500}
          height={300}
          data={overall}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" tickLine={false} tickFormatter={(tickItem) => tickItem ? tickItem?.split('-')[1] + '월 ' + tickItem?.split('-')[2] + '일' : ""} />
          <YAxis
            width={35}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
          />
         <Tooltip cursor={false} contentStyle={TooltipContainerStyles} />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone"     
                dataKey={dynamic[0].firstData}
                stroke="#8884d8" 
                strokeDasharray="5 5"  
                name={dynamic[1].firstDataName}
                unit={dynamic[1].firstDataUnit} 
                dot={false}
                strokeWidth={2}
                 />

          <Line type="monotone" 
                dataKey={dynamic[0].secondData}
                stroke="#82ca9d" 
                strokeDasharray="5 5"  
                name={dynamic[1].secondDataName}
                unit={dynamic[1].secondDataUnit}
                dot={false}
                strokeWidth={2}
                />
        </LineChart>
      </ResponsiveContainer>

  );
};

export default OverallDashChart;
