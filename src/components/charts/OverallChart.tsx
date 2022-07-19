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
import ChartCard from "./chartCustoms/ChartCard";
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import DailyReport from "../../data/daily-report.json";
import {
  parseISO,
  differenceInWeeks,
  getWeekOfMonth,
  add,
  eachWeekOfInterval,
  format,
} from "date-fns";
import { useRecoilState } from "recoil";
import { dynamicChartData, isMonthData } from "../../store/charts";
import { useOverallModel } from '../../api/models/useOverallModel';
import {overallData} from "../../store/global";

const DailyReportChart = () => {
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const [dynamic, setDynamic] = useRecoilState(dynamicChartData);
  const data = DailyReport.report;
  const [overall, setOverall] = useRecoilState(overallData)
  console.log(overall)
  const { reports, getReports, getWeeklyReport } = useOverallModel();
  const list: object[] = [];
  const shortWeekTemp = data.daily.map((v: any, index: number) =>
    index >= isMonth ? "" : list.push(v)
  );


  const formatXAxis = (tickItem: string) => {
    return format(parseISO(tickItem), `MM월 dd일`);
  };

  return (
    <ChartCard heading="이번주 광고 차트">
      {/* 최적 경우의 수  */}

      <button type="button" onClick={() => setIsMonth(30)}>
        / 기간 /
      </button>

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
          <XAxis dataKey="date" tickLine={false} tickFormatter={formatXAxis} />
          <YAxis
            width={35}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
          />
          <Tooltip cursor={false} contentStyle={TooltipContainerStyles} />
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
    </ChartCard>
  );
};

export default DailyReportChart;
