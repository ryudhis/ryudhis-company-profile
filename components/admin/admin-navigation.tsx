"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { LogOut, Home, FileText, Settings, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { User as UserType } from "@/lib/auth"

interface AdminNavigationProps {
  user: UserType
}

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "Blog Posts", href: "/admin/posts", icon: FileText },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminNavigation({ user }: AdminNavigationProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" })

      if (!response.ok) {
        throw new Error("Failed to logout")
      }

      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      })

      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to logout",
        variant: "destructive",
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <header className="px-4 lg:px-8 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-8">
          <Link href="/admin/dashboard" className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary truncate">
              <span className="hidden sm:inline">Ryudhis Company Admin</span>
              <span className="sm:hidden">Admin</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden cursor-pointer">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 z-50">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-2 w-full",
                        pathname === item.href ? "text-primary font-medium" : ""
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:flex"
          >
            <Link href="/">View Website</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="sm:hidden h-8 w-8 p-0"
          >
            <Link href="/" title="View Website">
              <Home className="h-4 w-4" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs sm:text-sm cursor-pointer"
              >
                <span className="max-w-[80px] sm:max-w-[120px] truncate">
                  {user.name || user.email}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50">
              <DropdownMenuItem asChild>
                <Link
                  href="/admin/settings"
                  className="flex items-center space-x-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
                <LogOut className="mr-2 h-4 w-4" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
