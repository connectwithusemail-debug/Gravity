"use client"

import { motion } from "framer-motion"

export default function DesignAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4"
            style={{
              borderColor: i === 0 ? "#ec4899" : i === 1 ? "#f43f5e" : "#fb7185",
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          🎨
        </motion.div>
      </div>
    </div>
  )
}
