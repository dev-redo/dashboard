import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import ChartCard from '../../../components/ChartCard/ChartCard';
import { RAINFALL } from '../../../data/melb-monthly-rainfail';
import { getMonthNameByOrder } from '../../../monthMapping';
import { TooltipContainerStyles } from "../../../styles/constants/tooltipContainerStyles";

const RainFallBarChart: React.FC = () => {
  return (
    <ChartCard heading="Melbourne 2019 monthly rainfall">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={RAINFALL["2019"]}  style={{ fontWeight: 'bold' }}>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
          
            tickLine={false}
          />
          <YAxis unit="ml" width={35} axisLine={false} tickLine={false} />
          <Tooltip
            labelFormatter={getMonthNameByOrder}
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Bar dataKey="rainfall" fill="#3066BE" unit="ml" name="Rainfall" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RainFallBarChart;
