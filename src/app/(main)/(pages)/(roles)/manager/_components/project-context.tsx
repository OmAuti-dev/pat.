"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Project {
  id: string
  designer: string
  task: string
  status: "completed" | "review" | "queue" | "progress"
  priority: "high" | "mid" | "low"
  lastUpdated: string
  startDate?: string
  deadline?: string
  description?: string
  progress?: number
}

interface ProjectContextType {
  projectToDelete: Project | null
  setProjectToDelete: (project: Project | null) => void
  projectToEdit: Project | null
  setProjectToEdit: (project: Project | null) => void
  projects: Project[]
  setProjects: (projects: Project[]) => void
  showDeleteDialog: boolean
  showEditModal: boolean
  updateProject: (updatedProject: Project) => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      designer: "John Doe",
      task: "Market Research",
      status: "completed",
      priority: "high",
      lastUpdated: "2 hours ago",
      startDate: "2023-01-15",
      deadline: "2023-06-30",
      description: "This project focuses on market research to improve user engagement and conversion rates.",
      progress: 100,
    },
    {
      id: "2",
      designer: "Sarah Johnson",
      task: "Email Marketing",
      status: "review",
      priority: "mid",
      lastUpdated: "5 hours ago",
      startDate: "2023-02-10",
      deadline: "2023-07-15",
      description: "Email marketing campaign to increase customer engagement and retention.",
      progress: 85,
    },
    {
      id: "3",
      designer: "Jessica Doe",
      task: "Design Review",
      status: "queue",
      priority: "low",
      lastUpdated: "1 day ago",
      startDate: "2023-03-05",
      deadline: "2023-08-20",
      description: "Review and improve existing design elements for better user experience.",
      progress: 30,
    },
    {
      id: "4",
      designer: "Mike Bay",
      task: "UX Analysis",
      status: "progress",
      priority: "high",
      lastUpdated: "2 days ago",
      startDate: "2023-04-12",
      deadline: "2023-09-01",
      description: "Analyze user experience and identify areas for improvement.",
      progress: 60,
    },
    {
      id: "5",
      designer: "Em Davis",
      task: "Training Workshop",
      status: "queue",
      priority: "low",
      lastUpdated: "4 days ago",
      startDate: "2023-05-20",
      deadline: "2023-10-15",
      description: "Prepare and conduct training workshops for the team.",
      progress: 15,
    },
  ])

  const showDeleteDialog = projectToDelete !== null
  const showEditModal = projectToEdit !== null

  const updateProject = (updatedProject: Project) => {
    setProjects(projects.map((project) => (project.id === updatedProject.id ? updatedProject : project)))
  }

  return (
    <ProjectContext.Provider
      value={{
        projectToDelete,
        setProjectToDelete,
        projectToEdit,
        setProjectToEdit,
        projects,
        setProjects,
        showDeleteDialog,
        showEditModal,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export function useProject() {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider")
  }
  return context
}

