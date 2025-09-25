"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({
  size = 24,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <div
        className="border-2 border-primary border-t-transparent rounded-full"
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export function PulsingDot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`w-2 h-2 bg-primary rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export function BouncingDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-primary rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
