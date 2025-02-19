"use client"

import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the Task type
type Task = {
  id: string;
  title: string;
  deadline: string; // Assuming deadline is a string from the API
  assignee: string;
  priority: string;
};

interface TaskListProps {
  onTaskClick: (task: Task) => void;
}

const TaskList = ({ onTaskClick }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]); // State to store tasks

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tasks/fetchalltasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Function to get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 max-h-[400px] overflow-y-auto">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-900 p-2 rounded"
              onClick={() => onTaskClick(task)}
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">
                  Due: {new Date(task.deadline).toLocaleDateString()} {/* Parse deadline string to Date */}
                </p>
                <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
              </div>
              <Badge className={`${getPriorityColor(task.priority)} text-white`}>
                {task.priority}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TaskList;