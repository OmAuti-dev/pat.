'use client';

import TaskCard from '@/app/components/global/taskcard';
import React, { useEffect, useState } from 'react';

type Task = {
  _id: string;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  category: string;
};

const TaskListPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError('Error fetching tasks');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Delete a task
  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Error deleting task');
    }
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            _id={task._id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            priority={task.priority}
            
            onDelete={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskListPage;
