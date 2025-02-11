"use client"

import React, { useEffect, useState } from 'react';
 

const FetchAllTasks = () => {
type Task = {
    _id: string;
    title: string;
    description: string;
    deadline: string;
    priority: string;
    status: string;
  };
  

  
    // Fetch tasks from the backend
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/tasks/fetchalltasks');
          const data = await response.json();
          
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
  
     const Tasks = fetchTasks();
    }, []);
}
export default FetchAllTasks;