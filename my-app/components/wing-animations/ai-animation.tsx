"use client"

import { motion } from "framer-motion"

export default function AIAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64">
        {[...Array(5)].map((_, ring) => (
          <motion.div
            key={ring}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${(ring + 1) * 40}px`,
              height: `${(ring + 1) * 40}px`,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-500 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 45}deg) translateX(${(ring + 1) * 20}px)`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (ring * 0.2) + (i * 0.1),
                }}
              />
            ))}
          </motion.div>
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🤖
        </motion.div>
      </div>
    </div>
  )
}
