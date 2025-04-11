"use client"

import { useProject } from "./project-context"
import { AlertTriangle } from "lucide-react"

export function DeleteConfirmDialog() {
  const { projectToDelete, setProjectToDelete, projects, setProjects } = useProject()

  if (!projectToDelete) return null

  const handleCancel = () => {
    setProjectToDelete(null)
  }

  const handleDelete = () => {
    // Filter out the project to delete
    const updatedProjects = projects.filter((project) => project.id !== projectToDelete.id)
    setProjects(updatedProjects)
    setProjectToDelete(null)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleCancel} />

      {/* Dialog content */}
      <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold">Delete Project</h2>
        </div>

        <p className="mb-6">
          Are you sure you want to delete the project <span className="font-medium">{projectToDelete.task}</span>{" "}
          assigned to <span className="font-medium">{projectToDelete.designer}</span>? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={handleCancel} className="px-4 py-2 border border-border rounded-md hover:bg-accent">
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

