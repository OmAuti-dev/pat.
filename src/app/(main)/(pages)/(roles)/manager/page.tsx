"use client"

import { useState } from "react"
import Dashboard from "./_components/dashboard"
import { DesignerProvider } from "./_components/designer-context"
import { ProjectProvider } from "./_components/project-context"
import { UserProvider } from "../_components/user-context"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <UserProvider>
      <DesignerProvider>
        <ProjectProvider>
          <main className="flex min-h-screen bg-background">
            {/* <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} /> */}
            <div className="flex-1 overflow-auto">
              <Dashboard toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            </div>
          </main>
        </ProjectProvider>
      </DesignerProvider>
    </UserProvider>
  )
}

