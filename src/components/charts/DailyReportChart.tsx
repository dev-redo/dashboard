import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import ChartCard from './chartCustoms/ChartCard';
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import DailyReport from "../../data/daily-report.json";
import {parseISO, differenceInWeeks, getWeekOfMonth, add, eachWeekOfInterval, format } from 'date-fns'

const DailyReportChart: React.FC = () => {
  const data = DailyReport.report;
  const list:Array<object> = []
  const shortWeekTemp = data.daily.map((v:any, index:number) => index >=7 ? "" : (
    list.push(v)
    ))
    // console.log(list)

    const formatXAxis = (tickItem:string) => {

      return format(parseISO(tickItem), `MM월 dd일`)
    
    }

  return (
    <ChartCard heading="이번주 광고 차트">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={list} style={{ fontWeight: 'bold' }} margin={{
        top: 20,
        right: 60,
        left: 30,
        bottom: 5
      }}>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickFormatter={formatXAxis}
          />
          <YAxis
            dataKey="roas"
            width={35}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
            unit="원"
          />
          <Tooltip
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Line
            type="monotone"
            dataKey="roas"
            stroke="#EF5B5B"
            name="광고수익률"
            unit="원"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="blue"
            name="클릭수"
            unit="회"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default DailyReportChart;
