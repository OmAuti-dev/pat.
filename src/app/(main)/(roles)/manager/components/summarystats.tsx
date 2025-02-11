import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, CheckCircle, AlertCircle } from "lucide-react"

const stats = [
  { title: "Total Team Members", value: 24, icon: Users, color: "text-blue-500" },
  { title: "Active Projects", value: 7, icon: Briefcase, color: "text-green-500" },
  { title: "Completed Tasks", value: 128, icon: CheckCircle, color: "text-purple-500" },
  { title: "Overdue Tasks", value: 3, icon: AlertCircle, color: "text-red-500" },
]

export default function SummaryStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

