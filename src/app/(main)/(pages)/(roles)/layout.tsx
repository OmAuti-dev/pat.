import Navbar from '@/app/(main)/(pages)/(roles)/_components/navbar'
import { AppSidebar } from '@/app/(main)/(pages)/(roles)/_components/Sidebar/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Toaster } from '@/components/ui/toaster'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className=" ">
      {/* Sidebar */}
      <SidebarProvider>
        <AppSidebar />
        <Navbar />
      <div className="flex-1 flex flex-col border-l border-t border-muted-foreground/20 pb-20  ">
     
        {children}
        <Toaster />
       
      </div>
      </SidebarProvider>

      {/* Main Content */}

    </div>
  )
}

export default Layout;
