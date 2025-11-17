"use client"

import { motion } from "framer-motion"

export default function MetaverseAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-indigo-500/50"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-purple-500/50"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-500 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos(i * 30 * Math.PI / 180) * 80],
              y: [0, Math.sin(i * 30 * Math.PI / 180) * 80],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          🌌
        </motion.div>
      </div>
    </div>
  )
}
