"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { status: "todo", tasks: 3, fill: "var(--color-todo)" },
  { status: "pending", tasks: 22, fill: "var(--color-pending)" },
  { status: "completed", tasks: 22, fill: "var(--color-completed)" },
  { status: "unassigned", tasks: 0, fill: "var(--color-unassigned)" },
]

const chartConfig = {
  tasks: {
    label: "tasks",
  },
  todo: {
    label: "todo",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "pending",
    color: "hsl(var(--chart-2))",
  },
  completed: {
    label: "completed",
    color: "hsl(var(--chart-3))",
  },
  unassigned: {
    label: "unassigned",
    color: "hsl(var(--chart-4))",
  },
 
} satisfies ChartConfig

export function StatusChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tasks"
              nameKey="status"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
