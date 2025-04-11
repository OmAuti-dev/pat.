"use client"

import Link from "next/link"
import { Search, Bell, ShoppingCart, Settings, Menu } from "lucide-react"
import { usePathname } from "next/navigation"

interface ProfileHeaderProps {
  toggleSidebar: () => void
}

export function ProfileHeader({ toggleSidebar }: ProfileHeaderProps) {
  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-accent md:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-input border border-input"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex -space-x-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Team member"
            className="w-8 h-8 rounded-full border-2 border-background"
          />
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Team member"
            className="w-8 h-8 rounded-full border-2 border-background"
          />
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Team member"
            className="w-8 h-8 rounded-full border-2 border-background"
          />
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Team member"
            className="w-8 h-8 rounded-full border-2 border-background"
          />
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white border-2 border-background">
            +8
          </div>
        </div>
        <button className="p-2 rounded-md hover:bg-accent">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-md hover:bg-accent">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <Link href="/profile/settings" className="p-2 rounded-md hover:bg-accent">
          <Settings className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

