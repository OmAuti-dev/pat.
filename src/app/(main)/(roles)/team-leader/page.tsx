"use client"

import { useState } from "react"
import TeamMemberList from "./components/team-member-list"
import Calendar from "./components/calendar"
import ProjectProgress from "./components/project-progress"
import TaskList from "./components/task-list"
import type { TeamMember, Task } from "@/lib/types"
import TeamMemberModal from "./components/team-member-modal"
import TaskModal from "./components/task-modal"

const Dashboard = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamMemberList onMemberClick={setSelectedMember} />
        <ProjectProgress />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TaskList onTaskClick={setSelectedTask} />
        <Calendar onEventClick={setSelectedTask} />
      </div>
      {selectedMember && <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
      {selectedTask && <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  )
}

export default Dashboard

