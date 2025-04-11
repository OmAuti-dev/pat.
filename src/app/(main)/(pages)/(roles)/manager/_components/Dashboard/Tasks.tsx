"use client"
import { Edit, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { PriorityBadge } from '../priority-badge'
import { StatusBadge } from '../status-badge'
import { useDesigner } from '../designer-context'
import { Project, useProject } from '../project-context'


const Tasks = () => {
    const { projects } = useProject() 
  return (
   <div className="bg-card rounded-lg border border-border">
           <div className="flex justify-between items-center p-4">
             <div className="flex items-center gap-3">
               <h2 className="text-xl font-semibold">Tasks</h2>
               <ProjectSelector />
             </div>
             <div className="text-sm text-muted-foreground">1 - 10</div>
           </div>
   
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="border-y border-border">
                   <th className="w-10 p-3">
                     <input type="checkbox" className="rounded" />
                   </th>
                   <th className="p-3 text-left font-medium">VISUAL</th>
                   <th className="p-3 text-left font-medium">EMPLOYEE</th>
                   <th className="p-3 text-left font-medium">TASK</th>
                   <th className="p-3 text-left font-medium">STATUS</th>
                   <th className="p-3 text-left font-medium">PRIORITY</th>
                   <th className="p-3 text-left font-medium hidden md:table-cell">LAST UPDATED</th>
                   <th className="w-20 p-3"></th>
                 </tr>
               </thead>
               <tbody>
                 {/* Use the projects from context */}
                 {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
               </tbody>
             </table>
           </div>
         </div>
  )
}

export default Tasks

function ProjectSelector() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState("All Projects")
    const projects = ["All Projects", "Website Redesign", "Mobile App", "Marketing Campaign", "Brand Identity"]
  
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
                    setSelectedProject(project)
                    setIsOpen(false)
                  }}
                >
                  {project}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  function ProjectRow({ project }: { project: Project }) {
    const { setSelectedDesigner } = useDesigner()
    const { setProjectToDelete, setProjectToEdit } = useProject()
  
    const handleDesignerClick = () => {
      setSelectedDesigner({
        id: project.id,
        name: project.designer,
        avatar: "/placeholder.svg?height=40&width=40",
        task: project.task,
        status: project.status,
        priority: project.priority,
        lastUpdated: project.lastUpdated,
        email: `${project.designer.toLowerCase().replace(" ", ".")}@example.com`,
        phone: "+1 (555) 123-4567",
        portfolio: "https://portfolio.example.com/" + project.designer.toLowerCase().replace(" ", ""),
        bio: `${project.designer} is an experienced employee specializing in ${project.task.toLowerCase()}. With over 5 years of industry experience, they bring a unique perspective to every project.`,
        skills: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Visual Design"],
        currentProject: {
          name: project.task,
          description:
            project.description ||
            `This project focuses on ${project.task.toLowerCase()} to improve user engagement and conversion rates.`,
          startDate: project.startDate || "2023-01-15",
          deadline: project.deadline || "2023-06-30",
          progress: project.progress || Math.floor(Math.random() * 100),
          assignedDate: "2023-01-10",
          teamMembers: [
            {
              name: "Alex Johnson",
              avatar: "/placeholder.svg?height=40&width=40",
              role: "Project Manager",
            },
            {
              name: "Taylor Swift",
              avatar: "/placeholder.svg?height=40&width=40",
              role: "UX Researcher",
            },
            {
              name: "Sam Wilson",
              avatar: "/placeholder.svg?height=40&width=40",
              role: "Developer",
            },
          ],
        },
      })
    }
  
    const handleDelete = () => {
      setProjectToDelete(project)
    }
  
    const handleEdit = () => {
      setProjectToEdit(project)
    }
  
    return (
      <tr className="border-b border-border">
        <td className="p-3">
          <input type="checkbox" className="rounded" />
        </td>
        <td className="p-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt={project.designer}
              className="w-full h-full object-cover"
            />
          </div>
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
        <td className="p-3 text-muted-foreground hidden md:table-cell">{project.lastUpdated}</td>
        <td className="p-3">
          <div className="flex gap-2">
            <button className="p-1 hover:text-primary" onClick={handleEdit}>
              <Edit className="h-4 w-4" />
            </button>
            <button className="p-1 hover:text-destructive" onClick={handleDelete}>
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </td>
      </tr>
    )
  }
  