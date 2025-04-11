"use client"
import { toggleSidebar } from '@/lib/sidebarSlice';
import { RootState } from '@/lib/store';
import { Bell, Menu, Search, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const Navbar = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const handleSettingsClick = () => {
        router.push("/profile/settings")
      }
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button  onClick={() => dispatch(toggleSidebar())} className="p-2 rounded-md hover:bg-accent md:hidden">
            <Menu className="h-5 w-5" />
            {isSidebarOpen && ""}
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
          
          <button className="p-2 rounded-md hover:bg-accent">
            <Bell className="h-5 w-5" />
          </button>
          
          <button className="p-2 rounded-md hover:bg-accent" onClick={handleSettingsClick}>
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
  )
}

