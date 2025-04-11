"use client";

import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"; // Custom Redux hooks
import { toggleSidebar } from "@/lib/sidebarSlice";
import { MoreHorizontal } from "lucide-react";
import { ProfileHeader } from "../../(roles)/_components/profile-header";

export default function ProfileActivityPage() {
  const dispatch = useAppDispatch();

  const toggleSidebarHandler = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);

  return (
    <main className="flex min-h-screen bg-background">
      <div className="flex-1 overflow-auto">
        <ProfileActivityContent toggleSidebar={toggleSidebarHandler} />
      </div>
    </main>
  );
}

function ProfileActivityContent({ toggleSidebar }: { toggleSidebar: () => void }) {
  const user = useAppSelector((state) => state.user);
  const userMemo = useMemo(() => user, [user]);

  return (
    <div className="p-3 md:p-6 space-y-6">
      <ProfileHeader toggleSidebar={toggleSidebar} />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Post Activity</h1>
        </div>

        <FollowerCount />
        <PostActivityCard user={userMemo} />
      </div>
    </div>
  );
}

const FollowerCount = () => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
    <span className="text-sm text-blue-500">826 followers</span>
  </div>
);

const PostActivityCard = ({ user }: { user: { name: string; avatar: string } }) => (
  <div className="bg-card rounded-lg border border-border p-6">
    <div className="flex gap-4 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src={user.avatar || "/placeholder.svg?height=48&width=48"}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-sm text-muted-foreground">posted this • 2 hr</p>
      </div>
      <div className="ml-auto">
        <button className="p-1 hover:bg-accent rounded-full">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>

    <p className="mb-6">
      Duis a nulla porttitor, aliquam orci malesuada, efficitur ligula. Curabitur nec commodo eros, a volutpat purus.
      Mauris vitae lobortis mauris. Cras quis porttitor arcu, sed accumsan neque.
    </p>

    <div className="w-full h-64 rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"></div>
  </div>
);
