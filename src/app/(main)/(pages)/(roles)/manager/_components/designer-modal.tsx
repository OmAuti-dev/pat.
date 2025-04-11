"use client"

import { X, Mail, Phone, Globe, Calendar, Clock } from "lucide-react"
import { useDesigner } from "./designer-context"
import { StatusBadge } from "./status-badge"
import { PriorityBadge } from "./priority-badge"
import { ProgressBar } from "./progress-bar"

export function DesignerModal() {
  const { selectedDesigner, setSelectedDesigner } = useDesigner()

  if (!selectedDesigner) return null

  const closeModal = () => {
    setSelectedDesigner(null)
  }

  // Format date from YYYY-MM-DD to Month DD, YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

      {/* Modal content */}
      <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10">
        <div className="flex justify-between items-start p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={selectedDesigner.avatar || "/placeholder.svg"}
                alt={selectedDesigner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{selectedDesigner.name}</h2>
              <p className="text-muted-foreground">Designer</p>
            </div>
          </div>
          <button onClick={closeModal} className="p-2 hover:bg-accent rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Designer info */}
          <div className="space-y-6 md:col-span-1">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${selectedDesigner.email}`} className="text-primary hover:underline">
                    {selectedDesigner.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${selectedDesigner.phone}`} className="hover:text-primary">
                    {selectedDesigner.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={selectedDesigner.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Portfolio Website
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedDesigner.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-sm text-muted-foreground">{selectedDesigner.bio}</p>
            </div>
          </div>

          {/* Right column - Project info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-accent/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Current Task: {selectedDesigner.task}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <StatusBadge status={selectedDesigner.status} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Priority</p>
                  <PriorityBadge priority={selectedDesigner.priority} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Last Updated</p>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedDesigner.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <div className="space-y-4">
                <p className="text-sm">{selectedDesigner.currentProject.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(selectedDesigner.currentProject.startDate)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Deadline</p>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(selectedDesigner.currentProject.deadline)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Progress</p>
                    <span className="text-sm">{selectedDesigner.currentProject.progress}%</span>
                  </div>
                  <ProgressBar progress={selectedDesigner.currentProject.progress} />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button onClick={closeModal} className="px-4 py-2 border border-border rounded-md hover:bg-accent">
                Close
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Contact Designer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

