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

const TemperatureLineChart: React.FC = () => {
  return (
    <ChartCard heading="Melbourne 2019 monthly temperature">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={TEMPERATURE["2019"]} style={{ fontWeight: 'bold' }}>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
          />
          <YAxis
            unit="°C"
            width={35}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
          />
          <Tooltip
            labelFormatter={getMonthNameByOrder}
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#EF5B5B"
            name="Temperature"
            unit="°C"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default TemperatureLineChart;
