"use client"

import { motion } from "framer-motion"

export default function FossAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-orange-500 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 60}deg) translateY(-80px)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                backgroundColor: ["#f97316", "#fb923c", "#f97316"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔓
        </motion.div>
      </div>
    </div>
  )
}
