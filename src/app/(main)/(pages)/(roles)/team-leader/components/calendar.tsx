"use client"

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import type { Task } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

moment.locale("en-GB")
const localizer = momentLocalizer(moment)

interface CalendarProps {
  onEventClick: (task: Task) => void
}

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Implement user authentication",
    deadline: new Date(2023, 5, 15),
    assignee: "Alice Johnson",
    priority: "High",
  },
  {
    id: 2,
    title: "Design landing page",
    deadline: new Date(2023, 5, 20),
    assignee: "Charlie Brown",
    priority: "Medium",
  },
  { id: 3, title: "Set up database schema", deadline: new Date(2023, 5, 18), assignee: "Bob Smith", priority: "High" },
  {
    id: 4,
    title: "Write API documentation",
    deadline: new Date(2023, 5, 25),
    assignee: "Alice Johnson",
    priority: "Low",
  },
  {
    id: 5,
    title: "Implement error handling",
    deadline: new Date(2023, 5, 22),
    assignee: "Bob Smith",
    priority: "Medium",
  },
]

const Calendar = ({ onEventClick }: CalendarProps) => {
  const events = mockTasks.map((task) => ({
    title: task.title,
    start: task.deadline,
    end: task.deadline,
    allDay: true,
    resource: task,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
            onSelectEvent={(event) => onEventClick(event.resource)}
            views={["month"]}
            defaultView="month"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default Calendar

