"use client"
import { motion } from "framer-motion"

export default function ElectricWire() {
  return (
    <div className=" w-0 md:w-[50%] h-1 mx-auto bg-amber-700 rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Glowing pulse */}
      <motion.div
        className="h-1 w-6 bg-gray-50 rounded-full shadow-[0_0_10px_#facc15] absolute left-0 origin-left"
        animate={{ x: ["-20%", "5000%"] }} // from slightly before start to parent width
        transition={{
          duration: 5, // adjust speed
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
