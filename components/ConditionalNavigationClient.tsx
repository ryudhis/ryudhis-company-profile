"use client"

import { Navigation } from "@/components/navigation"
import { usePathname } from "next/navigation"

export function ConditionalNavigationClient() {
  const pathname = usePathname()

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return <Navigation />
}
