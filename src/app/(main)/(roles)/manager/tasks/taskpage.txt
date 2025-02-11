'use client';

import TaskCard from '@/components/global/TaskCard';
import React, { useEffect, useState } from 'react';


type Task = {
  _id: string;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  status: string;
};

const TaskListPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks/fetchalltasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Delete a task
  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/deletetask/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
        console.log('Task deleted successfully');
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="flex flex-auto gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          _id={task._id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          status={task.status}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskListPage;
