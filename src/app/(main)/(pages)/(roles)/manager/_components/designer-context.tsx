"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Designer {
  id: string
  name: string
  task: string
  status: "completed" | "review" | "queue" | "progress"
  priority: "high" | "mid" | "low"
  lastUpdated: string
  email: string
  portfolio: string
  bio: string
  skills: string[]
  currentProject: {
    name: string
    description: string
    startDate: string
    deadline: string
    assignedDate: string
    progress: number
    teamMembers: {
      name: string;
      avatar: string;
      role: string;
    }[];
  }
}

interface DesignerContextType {
  selectedDesigner: Designer | null
  setSelectedDesigner: (designer: Designer | null) => void
}

const DesignerContext = createContext<DesignerContextType | undefined>(undefined)

export function DesignerProvider({ children }: { children: ReactNode }) {
  const [selectedDesigner, setSelectedDesigner] = useState<Designer | null>(null)

  return (
    <DesignerContext.Provider value={{ selectedDesigner, setSelectedDesigner }}>{children}</DesignerContext.Provider>
  )
}

export function useDesigner() {
  const context = useContext(DesignerContext)
  if (context === undefined) {
    throw new Error("useDesigner must be used within a DesignerProvider")
  }
  return context
}

