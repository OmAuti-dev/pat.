import type React from "react"
import { ThemeProvider } from "@/providers/theme-provider"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Sidebar from "./(roles)/_components/sidebar"
import { ReduxProvider } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Task Dasher",
  description: "Task management dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
     <div>
      <Sidebar />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <main className="md:ml-[250px]">
            <ReduxProvider>
          {children}
            </ReduxProvider>
          </main>
            
        </ThemeProvider>
        </div> 
  )
}

