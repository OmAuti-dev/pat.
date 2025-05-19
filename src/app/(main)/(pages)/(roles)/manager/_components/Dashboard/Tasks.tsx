"use client"
import { Edit, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { PriorityBadge } from '../priority-badge'
import { StatusBadge } from '../status-badge'
import { useDesigner } from '../designer-context'
import { Project, useProject } from '../project-context'


const Tasks = () => {
  const { projects } = useProject(); // Optional
  const [tasks, setTasks] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState("All Projects");

  const handleFetch = async () => {
    try {
      const res = await fetch("/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");

      const result = await res.json();
      setTasks(result.tasks || result); // depends on your API shape
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) return <div>Loading tasks...</div>;

  // Get unique project names for selector
  const projectNames = ["All Projects", ...new Set(tasks.map(task => task.projectName || task.task))];

  // Filter tasks if a specific project is selected
  const filteredTasks =
    selectedProject === "All Projects"
      ? tasks
      : tasks.filter(task => task.projectName === selectedProject || task.task === selectedProject);

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <ProjectSelector
            projects={projectNames}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
          />
        </div>
        <div className="text-sm text-muted-foreground">1 - {filteredTasks.length}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-border">
              <th className="w-10 p-3">
                <input type="checkbox" className="rounded" />
              </th>
              
              <th className="p-3 text-left font-medium">EMPLOYEE</th>
              <th className="p-3 text-left font-medium">TASK</th>
              <th className="p-3 text-left font-medium">STATUS</th>
              <th className="p-3 text-left font-medium">PRIORITY</th>
              <th className="p-3 text-left font-medium hidden md:table-cell">LAST UPDATED</th>
              <th className="w-20 p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <ProjectRow key={task._id} project={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Tasks;

// Your ProjectSelector and ProjectRow remain mostly same


function ProjectSelector({
  projects,
  selectedProject,
  onSelect,
}: {
  projects: string[];
  selectedProject: string;
  onSelect: (project: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border border-border hover:bg-accent"
      >
        {selectedProject}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-1 z-20 bg-card border border-border rounded-md shadow-lg w-48">
            {projects.map((project) => (
              <button
                key={project}
                className="w-full text-left px-3 py-2 hover:bg-accent text-sm"
                onClick={() => {
                  onSelect(project);
                  setIsOpen(false);
                }}
              >
                {project}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


function ProjectRow({ project }: { project: Project }) {
  const { setSelectedDesigner } = useDesigner();
  const { setProjectToDelete, setProjectToEdit } = useProject();

  const handleDesignerClick = () => {
    setSelectedDesigner({
      id: project._id,
      name: project.designer,
      task: project.task,
      status: project.status,
      priority: project.priority,
      lastUpdated: project.lastUpdated,
      email: project.email || "",
      portfolio: project.portfolio || "",
      bio: project.bio || "",
      skills: project.skills || [],
      currentProject: project.currentProject || {},
    });
  };

  return (
    <tr className="border-b border-border">
      <td className="p-3">
        <input type="checkbox" className="rounded" />
      </td>
      
      <td className="p-3 font-medium">
        <button
          onClick={handleDesignerClick}
          className="hover:text-primary hover:underline focus:outline-none focus:text-primary"
        >
          {project.designer}
        </button>
      </td>
      <td className="p-3">{project.task}</td>
      <td className="p-3">
        <StatusBadge status={project.status} />
      </td>
      <td className="p-3">
        <PriorityBadge priority={project.priority} />
      </td>
      <td className="p-3 text-muted-foreground hidden md:table-cell">
        {project.lastUpdated}
      </td>
      <td className="p-3">
        <div className="flex gap-2">
          <button className="p-1 hover:text-primary" onClick={() => setProjectToEdit(project)}>
            <Edit className="h-4 w-4" />
          </button>
          <button className="p-1 hover:text-destructive" onClick={() => setProjectToDelete(project)}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

  