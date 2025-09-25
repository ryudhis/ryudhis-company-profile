"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const letters = text.split("")

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.03, delayChildren: delay }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function SlideInWords({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {typeof children === "string"
        ? children.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))
        : children}
    </motion.div>
  )
}
