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

import { RAINFALL } from '../../../data/melb-monthly-rainfail';
import { getMonthNameByOrder } from '../../../data/monthMapping';
import { TooltipContainerStyles } from "../../../styles/constants/tooltipContainerStyles";

const RainFallAreaChart: React.FC = () => {
  return (
  
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={RAINFALL["2019"]} style={{ fontWeight: 'bold' }}>
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
          <XAxis dataKey="month" />
          <YAxis
            unit="ml"
            orientation="left"
            width={35}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            labelFormatter={getMonthNameByOrder}
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Area
            dataKey="rainfall"
            name="Rainfall"
            unit="ml"
            type="basis"
            fill="url(#rainGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
   
  );
};

export default RainFallAreaChart;
