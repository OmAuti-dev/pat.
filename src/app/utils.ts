import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export interface TaskData {
  _id?: string;
  title: string;
  description: string;
  skillset?: string[]; 
  deadline?: string;
  priority?: "low" | "medium" | "high"; 
  status?: "todo" | "in-progress" | "completed"; 
  category?: string;
  assignedUsers?: string[]; 
  date?: string; 
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


 //Get all users with or without tasks
export const fetchUsers = async (getToken: () => Promise<string | null>) => {
    try {
      const token = await getToken(); // Get token from Clerk
      if (!token) throw new Error("Token not available");
  
      const res = await fetch("https://ombackend-lqng.onrender.com/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the correct token
        },
        cache: "no-store",
      });
  
      if (!res.ok) {
       return console.log('Error');
      }
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
 
 
  //create Tasks
  export const createTask = async (taskData: TaskData, getToken: () => Promise<string | null>) => {
    try {
      
      const token = await getToken();
      if (!token) throw new Error("Token not available");
  
      const response = await fetch("https://ombackend-lqng.onrender.com/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error creating task:", error);
      return null;
    }
  };

