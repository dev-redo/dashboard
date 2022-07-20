import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";

import { AGE_GROUP } from '../../../data/website-visit-age-group';
import { getMonthNameByOrder } from '../../../data/monthMapping';
import { TooltipContainerStyles } from "../../../styles/constants/tooltipContainerStyles";
import { COLORS } from "../../../styles/constants/pieColors";

type ChartProps = {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}:ChartProps) => {
    if (percent) {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" fontSize={12} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
}

const DemographicPieChart: React.FC = () => {
  return (
  
      <ResponsiveContainer width="100%" height={200}>
        <PieChart style={{ fontWeight: 'bold' }}>
          <Tooltip
            cursor={false}
            contentStyle={TooltipContainerStyles}
            formatter={(value:number, name:string) => [`${value}%`, `Age - ${name}`]}
          />

          <Pie
            dataKey="percentage"
            data={AGE_GROUP}
            outerRadius={100}
            innerRadius={40}
            name="Percentage"
            nameKey="age"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {AGE_GROUP.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
   
  );
};

export default DemographicPieChart;
