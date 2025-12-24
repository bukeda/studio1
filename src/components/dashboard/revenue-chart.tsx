'use client';

import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { revenueEfficiencyData } from '@/lib/data';

const chartConfig = {
    value: {
        label: "Efficiency",
    },
};

export function RevenueChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <BarChart 
        accessibilityLayer 
        data={revenueEfficiencyData} 
        layout="vertical"
        margin={{ left: 0, right: 40 }}
      >
        <XAxis type="number" dataKey="value" hide />
        <YAxis 
          dataKey="name" 
          type="category"
          tickLine={false}
          axisLine={false}
          tickMargin={5}
          width={80}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="value" radius={5}>
            <LabelList
              position="right"
              offset={10}
              className="fill-foreground"
              fontSize={12}
              formatter={(value: number) => `${value}%`}
            />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
