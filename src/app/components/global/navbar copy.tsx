"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Command, MenuIcon } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/button";

const NavbarHome = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const user = useSelector((state: RootState) => state.user);

  const isUserDataReady = isSignedIn && !!user?.role;

  useEffect(() => {
    if (isUserDataReady) {
      if (user.role === "client") {
        router.push("/client");
      } else if (user.role === "manager") {
        router.push("/manager");
      } else if (user.role === "employee") {
        router.push("/employee");
      } else if (user.role === "teamleader") {
        router.push("/teamleader");
      }
    } 
  }, [isUserDataReady, user?.role, router]);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Command className="h-6 w-6" />
          <Link href="/">
            <span className="text-xl font-bold">Project Automation Tool</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
        </nav>
        <aside className="flex items-center gap-4">
          <div className="relative inline-flex h-10 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {!isSignedIn ? (
                <SignInButton mode="modal" forceRedirectUrl="/">
                  <button>Login</button>
                </SignInButton>
              ) : (
                <UserButton afterSwitchSessionUrl="" />
              )}
            </span>
          </div>

          {isUserDataReady ? (
            <Link href={`/${user?.role}`}>
              <Button className="text-md">Dashboard</Button>
            </Link>
          ) : !isSignedIn ? (
            <SignUpButton>
              <Button>Sign Up</Button>
            </SignUpButton>
          ) : null}

          <MenuIcon className="md:hidden" />
        </aside>
      </div>
    </header>
  );
};

export default NavbarHome;
