"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Bell } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const metrics = [
  { name: "Satisfaction", value: "90%" },
  { name: "Project Completion", value: "75%" },
  { name: "Response Time", value: "2h" },
];

const progressData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 40 },
  { name: "Week 3", progress: 60 },
  { name: "Week 4", progress: 80 },
];

const notifications = [
  { id: 1, message: "Invoice #123 has been paid." },
  { id: 2, message: "New message from support team." },
  { id: 3, message: "Project milestone achieved." },
];

const initialTasks = [
  { id: 1, title: "Approve new contract", completed: false },
  { id: 2, title: "Review project proposal", completed: false },
  { id: 3, title: "Schedule meeting with team", completed: false },
];

const deadlines = [
  { id: 1, task: "Final Presentation", date: "2025-02-20" },
  { id: 2, task: "Contract Renewal", date: "2025-03-01" },
];

export default function ClientDashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Client Metrics</CardTitle>
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

      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={progressData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="progress" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {notifications.map((notification) => (
              <li key={notification.id} className="flex items-start space-x-2">
                <Bell className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-sm">{notification.message}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm ${task.completed ? "line-through text-gray-500" : ""}`}
                >
                  {task.title}
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
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
    </div>
  );
}