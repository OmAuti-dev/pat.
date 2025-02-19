

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

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

export const description = "A bar chart with an active bar"

const chartData = [
  { project: "project1", progress: 187, fill: "var(--color-chrome)" },
  { project: "project2", progress: 200, fill: "var(--color-safari)" },
  { project: "project5", progress: 275, fill: "var(--color-firefox)" },
  { project: "project6", progress: 173, fill: "var(--color-edge)" },
  { project: "project7", progress: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    progress: {
    label: "progress",
  },
  project1: {
    label: "project_1",
    color: "#2563eb",
  },
  project2: {
    label: "project_2",
    color: "hsl(var(--chart-2))",
  },
  project5: {
    label: "project_5",
    color: "hsl(var(--chart-3))",
  },
  project6: {
    label: "project_6",
    color: "hsl(var(--chart-4))",
  },
  project7: {
    label: "project_7",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Trackprogress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="project"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="progress"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Shows total progress 
        </div>
      </CardFooter>
    </Card>
  )
}
