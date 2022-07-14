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
import ChartCard from '../../../components/ChartCard/ChartCard';
import { TEMPERATURE } from '../../../data/melb-monthly-temperature';
import { getMonthNameByOrder } from '../../../monthMapping';
import { TooltipContainerStyles } from "../../../styles/constants/tooltipContainerStyles";
import DailyReport from "../../../data/daily-report.json";

const DailyReportChart: React.FC = () => {
  const data = DailyReport.report;
  return (
    <ChartCard heading="오늘의 광고 차트">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data["daily"]} style={{ fontWeight: 'bold' }}>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            
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
            labelFormatter={getMonthNameByOrder}
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
