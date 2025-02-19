"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Task } from "../data/taskdata"; // Ensure Task interface is defined here or adjust accordingly
import { fetchTasks } from "@/action/fetchtasks"; // Adjust the import path to your fetchTasks function

interface TaskContextType {
  tasks: Task[];
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
  refreshTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Function to refresh tasks from the API
  
  // Fetch tasks once when the component mounts


  return (
   <div></div>
    
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
