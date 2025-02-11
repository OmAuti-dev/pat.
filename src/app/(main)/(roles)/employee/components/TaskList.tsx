"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface Task {
  id: number
  title: string
  completed: boolean
}

const initialTasks: Task[] = [
  { id: 1, title: "Complete project proposal", completed: false },
  { id: 2, title: "Review client feedback", completed: false },
  { id: 3, title: "Prepare presentation slides", completed: false },
  { id: 4, title: "Schedule team meeting", completed: false },
  { id: 5, title: "Update documentation", completed: false },
]

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
    )
  }

  const incompleteTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  const TaskItem = ({ task }: { task: Task }) => (
    <li key={task.id} className="flex items-center space-x-2">
      <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
      <label htmlFor={`task-${task.id}`} className={`text-sm ${task.completed ? "line-through text-gray-500" : ""}`}>
        {task.title}
      </label>
    </li>
  )

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Assigned Tasks</h3>
            {incompleteTasks.length > 0 ? (
              <ul className="space-y-2">
                {incompleteTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No assigned tasks.</p>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
            {completedTasks.length > 0 ? (
              <ul className="space-y-2">
                {completedTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No completed tasks yet.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

