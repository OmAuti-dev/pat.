"use client";

import * as React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { Badge } from "@/components/ui/badge";
import TaskModal from "../TaskModal/task-modal";
import { useEffect, useState } from "react";


 type Task = {
  _id: string;
  title: string;
  description: string;
  skillset: string[];
  deadline: string; // You can also use Date if you convert the string
  priority: string;
  status: string;
  category: string;
  assignedUsers: string[]; // Adjust this type if users have a different shape
  date: string; // Or Date
};

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-500/10 text-green-500";
    case "in-progress":
      return "bg-blue-500/10 text-blue-500";
    case "to-do":
      return "bg-gray-500/10 text-gray-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
}

export default function TaskTable() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFetch = async () => {
    try {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");

      const result = await res.json();
      setTasks(result.tasks); // or just result, depending on your API response
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      // setLoading(false);
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Table aria-label="Task Table" selectionMode="single">
        <TableHeader>
          <TableColumn>Key</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell className="font-medium">{task._id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${getStatusColor(task.status)} border-0`}
                >
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>{task.category}</TableCell>
              <TableCell>
                <TaskModal task={task} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
