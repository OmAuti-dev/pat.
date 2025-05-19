"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Save } from "lucide-react"
import { UserProvider, useUser } from "../../(roles)/_components/user-context"
import Image from "next/image"
import { useAuth } from "@clerk/nextjs";

export default function ProfileSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <UserProvider>
      <main className="flex min-h-screen bg-background">
        <div className="flex-1 overflow-auto">
          <ProfileSettingsContent toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </main>
    </UserProvider>
  )
}

function ProfileSettingsContent({ toggleSidebar }: { toggleSidebar: () => void }) {
  const router = useRouter()
  const { user, updateUser } = useUser()
  const [loading, setLoading] = useState(false);
  const { getToken, isSignedIn } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user.name,
    displayName: user.name,
    bio: user.bio,
    email: user.email,
    phone: user.phone,
    website: user.website,
    location: user.location,
    language: "English",
    title: user.title,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setLoading(true); // 1. Start the loading spinner
    const token = await getToken();
    if(!token) {
      return console.log('no token!')
    }
    try {
      // 2. Prepare the updated data you want to send
      const updatedUserData = {
        name: formData.fullName,
        bio: formData.bio,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        location: formData.location,
        title: formData.title,
      };
  
      // 3. Send PATCH request to your backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(updatedUserData),
      });
      
      // 4. Handle server response
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      
      const data = await response.json();
      
      // 5. Update the frontend user context if needed
      updateUser(data.updatedUser); // ✅ Use updatedUser not user
      
      // 6. Show success message
      alert("Profile updated successfully!");
      
      // 7. Redirect to profile page
      router.push("/profile");
      } catch (error: any) {
        console.error("Update failed:", error);
        alert(error.message || "Something went wrong while updating.");
      } finally {
        // 8. Always stop loading
        setLoading(false);
      }
      
  return (
    <div className="p-3 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-accent md:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold">Profile Settings</h1>
        </div>
      </div>

      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Account Section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-6">User Account</h2>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={user.avatar || "/placeholder.svg?height=96&width=96"}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground">Profile Picture 360 x 360</p>
              <button
                type="button"
                className="mt-2 px-4 py-1 border border-border rounded-full text-sm hover:bg-accent transition-colors"
              >
                Upload New
              </button>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Cras vel sem sit amet metus pretium pretium posuere vitae ligula.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="displayName" className="text-sm font-medium">
                Display name
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              />
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              About me
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={5}
              className="w-full p-2 rounded-md bg-input border border-input resize-none"
              placeholder="Say something about yourself."
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Cras vel sem sit amet metus pretium pretium posuere vitae ligula.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium">
                Website url
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="language" className="text-sm font-medium">
                Language
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
          </div>
        </div>

        {/* Work Information Section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-2">Work Information</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Cras vel sem sit amet metus pretium pretium posuere vitae ligula.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
                placeholder="Occupation"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-input border border-input"
                placeholder="Location"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </form>

      <footer className="text-center text-sm text-muted-foreground pt-4 border-t border-border mt-8">
        <p>©Project Automation Tool. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <span>Built by AOA&pos;s</span>
          <span>Powered by PAT.</span>
        </div>
      </footer>
    </div>
  )
}

