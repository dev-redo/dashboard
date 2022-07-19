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
import { STACKED } from "../../data/stacked-bar-data";
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import { useGetValuesByChannel } from "../../hooks/useGetValuesByChannel";
import {
  parseISO,
  differenceInWeeks,
  getWeekOfMonth,
  add,
  eachDayOfInterval,
  format,
} from "date-fns";
import ChannelReport from "../../data/channel-report.json";
import { renderLegend } from "./chartCustoms/Legend";
import { useRecoilState } from "recoil";
import { dynamicChartData, isMonthData } from "../../store/charts";
// import {
//   getPlatformData,
//   getPlatformTableData,
// } from "../../api/usePlatformData";
import { startData, endData, lastData, firstData, platformData } from "../../store/global";
import {  
  usePlatformModel
} from "../../api/models/usePlatformModel"

const StackedBarChart = () => {
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  // const lastDate = parseISO(ChannelReport[ChannelReport.length - 1].date);
  // const startDate = parseISO(ChannelReport[1].date);

  // const someDate = add(startDate, { days: isMonth });

  const { platformReport,
    getPlatformReport,
    getPlatformChartData,
    getPlatformTableData, } = usePlatformModel();
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)
  const [last, setLast] = useRecoilState(lastData)
  const [first, setFirst] = useRecoilState(firstData)
  const [platform, setPlatform] = useRecoilState(platformData)

  

  const d = eachDayOfInterval(
    { start: parseISO(start), end: parseISO(end) }
  )
  console.log(d.length)

  React.useEffect(() => {
    //setDateValue(date);
    //console.log(platformDate);
    
    getPlatformChartData(parseISO(start), d.length).then((result) =>
    setPlatform(result)
    );
  }, [start, end]);

  const result = eachDayOfInterval({
    start: parseISO(start),
    end: parseISO(end),
  });

  console.log(platform)

  const dateRange = result.map((x) => format(x, "yyyy-MM-dd"));
  // console.log(dateRange)
  const data = useGetValuesByChannel(platform);

  const toPercent = (decimal: number, fixed: number = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;

  const getPercent = (value: number, total: number) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
  };
  // console.log(getPercent(2, 10))

  const keys = [
    ["cost.google", "cost.naver", "cost.facebook", "cost.kakao"],
    ["imp.google", "imp.naver", "imp.facebook", "imp.kakao"],
    ["click.google", "click.naver", "click.facebook", "click.kakao"],
    ["roas.google", "roas.naver", "roas.facebook", "roas.kakao"],
    [
      "convValue.google",
      "convValue.naver",
      "convValue.facebook",
      "convValue.kakao",
    ],
  ];
  const colors = ["#82ca9d", "#8884d8", "#ec62e1", "#f8e749"];

  // console.log(data)
  return (
    // <ChartCard heading="스택 바!">
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
    // </ChartCard>
  );
};
export default StackedBarChart;
