"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

export interface User {
  id: string
  name: string
  avatar: string
  title: string
  email: string
  phone: string
  website: string
  location: string
  bio: string
}

interface UserContextType {
  user: User
  updateUser: (user: User) => void
}

const defaultUser: User = {
  id: "1",
  name: "Michelle Davis",
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-UZH9asGDfySU1i3CpZqS3bml395YD2.png",
  title: "Webflow Dev",
  email: "michelle@mail.com",
  phone: "+ (123) 456 789",
  website: "taskdasher.com",
  location: "New York City",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut nunc sed mauris dapibus varius. Donec placerat ante non mi luctus, a finibus ligula interdum. Cras accumsan nibh tortor, vitae lobortis magna tincidunt eget. Suspendisse orci nisl, pellentesque commodo dignissim sed, cursus vel massa.",
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser)

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem("taskDasherUser")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser)
    localStorage.setItem("taskDasherUser", JSON.stringify(updatedUser))
  }

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

