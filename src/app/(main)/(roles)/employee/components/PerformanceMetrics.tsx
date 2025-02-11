import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  { name: "Productivity", value: "85%" },
  { name: "Task Completion", value: "92%" },
  { name: "Attendance", value: "98%" },
]

export default function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {metrics.map((metric) => (
            <li key={metric.name} className="flex justify-between">
              <span className="text-sm text-gray-600">{metric.name}</span>
              <span className="font-semibold">{metric.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

