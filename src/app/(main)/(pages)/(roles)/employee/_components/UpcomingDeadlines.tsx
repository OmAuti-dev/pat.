import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const deadlines = [
  { id: 1, task: "Project Alpha", date: "2023-06-15" },
  { id: 2, task: "Client Meeting", date: "2023-06-18" },
  { id: 3, task: "Quarterly Report", date: "2023-06-30" },
]

export default function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {deadlines.map((deadline) => (
            <li key={deadline.id} className="flex justify-between">
              <span className="text-sm">{deadline.task}</span>
              <span className="text-sm text-gray-600">{deadline.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

