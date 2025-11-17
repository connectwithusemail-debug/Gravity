"use client"

import { motion } from "framer-motion"

export default function WebDevAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative w-48 h-48"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-green-500 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${i * 45}deg) translateX(60px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-emerald-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}
