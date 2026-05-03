"use client";

import { useTrail, animated } from "@react-spring/web";

export default function AnimatedGrid({
  children,
  className = "",
}) {
  const items = Array.isArray(children)
    ? children
    : [children];

  const trail = useTrail(items.length, {
    from: {
      opacity: 0,
      transform: "translateY(40px) scale(0.95)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
    config: {
      tension: 260,
      friction: 24,
      mass: 1.2,
    },
  });

  return (
    <div className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
}
