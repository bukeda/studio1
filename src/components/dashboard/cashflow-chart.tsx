'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cashflowData } from '@/lib/data';

const chartConfig = {
  inflow: {
    label: 'Inflow',
    color: 'hsl(var(--chart-1))',
  },
  outflow: {
    label: 'Outflow',
    color: 'hsl(var(--chart-2))',
  },
};

export function CashflowChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <AreaChart
        accessibilityLayer
        data={cashflowData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `$${Number(value) / 1000}k`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillInflow" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-inflow)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-inflow)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillOutflow" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-outflow)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-outflow)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="Inflow"
          type="natural"
          fill="url(#fillInflow)"
          fillOpacity={0.4}
          stroke="var(--color-inflow)"
          stackId="a"
        />
        <Area
          dataKey="Outflow"
          type="natural"
          fill="url(#fillOutflow)"
          fillOpacity={0.4}
          stroke="var(--color-outflow)"
          stackId="b"
        />
      </AreaChart>
    </ChartContainer>
  );
}
