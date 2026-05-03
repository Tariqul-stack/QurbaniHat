'use client'

import { useSpring, animated } from "@react-spring/web"
import { useState } from "react"

export default function AnimatedCard({
  children,
  className = "",
  onClick,
  delay = 0,
}) {
  const [hovered, setHovered] = useState(false)

  const entrySpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(28px) scale(0.97)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
    delay: delay,
    config: {
      tension: 280,
      friction: 26,
      mass: 1,
    },
  })

  const hoverSpring = useSpring({
    transform: hovered
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0px) scale(1)",
    boxShadow: hovered
      ? "0 20px 50px rgba(0,0,0,0.14)"
      : "0 2px 8px rgba(0,0,0,0.06)",
    config: {
      tension: 320,
      friction: 22,
      mass: 0.8,
    },
  })

  return (
    <animated.div
      style={{ ...entrySpring, ...hoverSpring }}
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </animated.div>
  )
}
