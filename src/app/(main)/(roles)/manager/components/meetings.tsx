"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock } from "lucide-react"

const meetingsData = [
  {
    id: 1,
    title: "Project Kickoff",
    time: "10:00 AM",
    client: "Acme Corp",
    description: "Initial meeting to discuss project scope and timeline.",
  },
  {
    id: 2,
    title: "Design Review",
    time: "2:00 PM",
    client: "TechStart Inc",
    description: "Review and approve final design mockups.",
  },
  {
    id: 3,
    title: "Sprint Planning",
    time: "11:30 AM",
    client: "Internal",
    description: "Plan tasks and goals for the upcoming sprint.",
  },
]

const activityFeed = [
  { id: 1, user: "John Doe", action: "completed", task: "Homepage redesign" },
  { id: 2, user: "Jane Smith", action: "started", task: "API integration" },
  { id: 3, user: "Mike Johnson", action: "commented on", task: "User authentication flow" },
]

export default function Meetings() {
  const [selectedMeeting, setSelectedMeeting] = useState<(typeof meetingsData)[0] | null>(null)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Scheduled Meetings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {meetingsData.map((meeting) => (
              <li
                key={meeting.id}
                className="flex justify-between items-center p-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/80"
                onClick={() => setSelectedMeeting(meeting)}
              >
                <span className="font-medium">{meeting.title}</span>
                <span className="text-sm text-muted-foreground">{meeting.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Activity Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {activityFeed.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-2 text-sm">
                <span className="font-medium">{activity.user}</span>
                <span className="text-muted-foreground">{activity.action}</span>
                <span className="font-medium">{activity.task}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Dialog open={!!selectedMeeting} onOpenChange={() => setSelectedMeeting(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMeeting?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p>
              <strong>Time:</strong> {selectedMeeting?.time}
            </p>
            <p>
              <strong>Client:</strong> {selectedMeeting?.client}
            </p>
            <p>
              <strong>Description:</strong> {selectedMeeting?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

