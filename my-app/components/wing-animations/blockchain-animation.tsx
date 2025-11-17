"use client"

import { motion } from "framer-motion"

export default function BlockchainAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center overflow-hidden">
      <div className="relative w-72 h-24 flex items-center justify-around">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              className="w-16 h-16 bg-orange-500/30 border-2 border-orange-500 rounded-lg flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <span className="text-2xl">⛓️</span>
            </motion.div>
            {i < 4 && (
              <motion.div
                className="w-8 h-1 bg-orange-500"
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
