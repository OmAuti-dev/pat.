"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const ProjectProgress = () => {
  const progress = 65 // This would typically come from your project data
  const remaining = 100 - progress

  const data = [
    { name: "Completed", value: progress },
    { name: "Remaining", value: remaining },
  ]

  const COLORS = ["#4CAF50", "#FFA000"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">{progress}% Complete</p>
      </CardContent>
    </Card>
  )
}

export default ProjectProgress

