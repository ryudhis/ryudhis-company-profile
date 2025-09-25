"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverLiftProps {
  children: ReactNode
  className?: string
}

export function HoverLift({ children, className = "" }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export function HoverScale({
  children,
  className = "",
  scale = 1.05,
}: {
  children: ReactNode
  className?: string
  scale?: number
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

export function HoverGlow({ children, className = "" }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  )
}
