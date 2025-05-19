"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/hooks"; // Ensure you have this typed correctly
import { toggleSidebar } from "@/lib/sidebarSlice";
import { useRouter, usePathname } from "next/navigation";
import { 
  LayoutDashboard, Clock, MessageSquare, User, Users, Building2, DollarSign, Bell, 
  Settings, HelpCircle, KeyRound, Shield, PenTool as Tool, X, 
  Command
} from "lucide-react";
import Link from "next/link";
import { RootState } from "@/lib/store";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "All Tasks", href: "/" },
  { icon: Clock, label: "Timeline", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#", badge: 3 },
  { icon: User, label: "Profile", href: "/profile/activity" },
  { icon: Users, label: "Contacts", href: "#" },
  { icon: Building2, label: "lists", href: "/manager/list" },
  { icon: DollarSign, label: "Pricing", href: "#" },
  { icon: Bell, label: "Notifications", href: "#", badge: 3 },
  { icon: Settings, label: "Settings", href: "/profile/settings" },
  { icon: HelpCircle, label: "Help Center", href: "#" },
  { icon: KeyRound, label: "Authentication", href: "#", hasSubmenu: true },
  { icon: Shield, label: "Admin Pages", href: "#", hasSubmenu: true },
  { icon: Tool, label: "Utility Pages", href: "#", hasSubmenu: true },
];


export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => dispatch(toggleSidebar())} />
      )}

      {/* Sidebar */}
      <div className={`
        fixed w-64 min-h-screen border-r bg-card flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
          <Command className="h-6 w-6" />
          <Link href={"/"}>
             <h1 className="font-bold text-xl">PAT.</h1>
          </Link>
          </div>
          <button className="p-1 md:hidden" onClick={() => dispatch(toggleSidebar())}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-4 h-screen overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ icon: Icon, label, href, badge, hasSubmenu }) => (
              <NavItem 
                key={label} 
                icon={<Icon className="h-5 w-5" />} 
                label={label} 
                href={href} 
                badge={badge} 
                isActive={pathname === href || (href !== "/" && pathname.startsWith(href))}
              />
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-500 overflow-hidden">
              <img src="/placeholder.svg?height=40&width=40" alt="Jane Doe" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">Jane Doe</p>
              <p className="text-xs text-muted-foreground">UX/UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
  isActive: boolean;
}

function NavItem({ icon, label, href, badge, isActive }: NavItemProps) {
  return (
    <li>
      <Link href={href} className={`
        flex items-center justify-between px-4 py-2 rounded-md   transition-colors
        hover:bg-accent ${isActive ? "bg-accent text-accent-foreground" : ""}
      `}>
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        {badge && <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">{badge}</span>}
      </Link>
    </li>
  );
}
