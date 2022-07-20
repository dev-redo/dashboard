import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import { useGetValuesByChannel } from "../../hooks/useGetValuesByChannel";
import {
  parseISO,
  eachDayOfInterval,
} from "date-fns";
import { renderLegend } from "./chartCustoms/Legend";
import { useRecoilState, useRecoilValue } from "recoil";
import { startData, endData, platformData } from "../../store/global";
import {  
  usePlatformModel
} from "../../api/models/usePlatformModel";
import {keys, colors} from "./chartCustoms/PlatformChartKeys";

const PlatformChart = () => {
  const { getPlatformChartData } = usePlatformModel();
  const start = useRecoilValue(startData);
  const end = useRecoilValue(endData);
  const [platform, setPlatform] = useRecoilState(platformData)

  const getEndDate = eachDayOfInterval(
    { start: parseISO(start), end: parseISO(end) }
  )

  React.useEffect(() => {
    getPlatformChartData(parseISO(start), getEndDate.length).then((result) =>
    setPlatform(result)
    );
  }, [start, end]);

  const data = useGetValuesByChannel(platform);

  const toPercent = (decimal: number, fixed: number = 0) =>
    `${(decimal * 100).toFixed(0)}%`;

  // const getPercent = (value: number, total: number) => {
  //   const ratio = total > 0 ? value / total : 0;

  //   return toPercent(ratio, 2);
  // };
  // console.log(getPercent(2, 10))


  return (

    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={1000}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{
          top: 20,
          right: 30,
          left: 60,
          bottom: 5,
        }}
        barCategoryGap={10}
        barGap={5}
      >
        <CartesianGrid strokeDasharray="6 6" />
        <XAxis dataKey="name" />

        <YAxis tickFormatter={toPercent} width={35} axisLine={false} />

        <Tooltip contentStyle={TooltipContainerStyles} />

        <Legend content={renderLegend} />

        {keys[0].map((key: string, index: number): any => {
          const bars = [];
          bars.push(
            <Bar
              dataKey={key}
              stackId="key"
              fill={colors[index]}
              barSize={70}
              name={key.split(".")[1]}
            />
          );
          return bars;
        })}

        {keys[1].map((key: string, index: number): any => {
          const bars = [];
          bars.push(
            <Bar
              dataKey={key}
              stackId="key"
              fill={colors[index]}
              name={key.split(".")[1]}
            />
          );
          return bars;
        })}

        {keys[2].map((key: string, index: number): any => {
          const bars = [];
          bars.push(
            <Bar
              dataKey={key}
              stackId="key"
              fill={colors[index]}
              name={key.split(".")[1]}
            />
          );
          return bars;
        })}
        {keys[3].map((key: string, index: number): any => {
          const bars = [];
          bars.push(
            <Bar
              dataKey={key}
              stackId="key"
              fill={colors[index]}
              name={key.split(".")[1]}
            />
          );
          return bars;
        })}
        {keys[4].map((key: string, index: number): any => {
          const bars = [];
          bars.push(
            <Bar
              dataKey={key}
              stackId="key"
              fill={colors[index]}
              name={key.split(".")[1]}
            />
          );
          return bars;
        })}
      </BarChart>
    </ResponsiveContainer>

  );
};
export default PlatformChart;
