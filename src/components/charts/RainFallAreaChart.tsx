import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Line
} from "recharts";
import ChartCard from './chartCustoms/ChartCard';
import { RAINFALL } from '../../data/melb-monthly-rainfail';
import { getMonthNameByOrder } from '../../monthMapping';
import { TooltipContainerStyles } from "../../styles/constants/tooltipContainerStyles";
import { useRecoilState } from "recoil";
import { dynamicChartData, isMonthData } from "../../store/charts";
import DailyReport from "../../data/daily-report.json";

const RainFallAreaChart = () => {
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const [dynamic, setDynamic] = useRecoilState(dynamicChartData);
  const data = DailyReport.report;
  const list: object[] = [];
  const shortWeekTemp = data.daily.map((v: any, index: number) =>
    index >= isMonth ? "" : list.push(v)
  );
  return (
    <ChartCard heading="광고차트">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={list} style={{ fontWeight: 'bold' }}>
          <defs>
            <linearGradient id="rainGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3066BE" />
              <stop offset="100%" stopColor="#3066BE22" />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#d6d9da"
          />
          <XAxis dataKey="date" />
          <YAxis
            unit="ml"
            orientation="left"
            width={35}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Area
            // dataKey="click"
            dataKey="click"
            name="클릭"
            unit="회"
            type="basis"
            fill="url(#rainGradient)"
          />
           <Area
            dataKey="roas"
            type="basis"
            fill="url(#rainGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RainFallAreaChart;
