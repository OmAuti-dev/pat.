import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

const notifications = [
  { id: 1, message: "New task assigned: Review project proposal" },
  { id: 2, message: "Team meeting scheduled for tomorrow at 2 PM" },
  { id: 3, message: "Reminder: Submit weekly report by EOD" },
  { id: 4, message: "Project milestone achieved: Phase 1 completed" },
  { id: 5, message: "New comment on your recent presentation" },
  { id: 6, message: "Training session: 'Effective Time Management' next week" },
  { id: 7, message: "Upcoming deadline: Client presentation on Friday" },
  { id: 8, message: "Feedback requested on the latest design mockups" },
]

export default function RecentNotifications() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-start space-x-2">
              <Bell className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
              <span className="text-sm">{notification.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

