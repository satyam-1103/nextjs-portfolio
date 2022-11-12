import React from "react";
import {motion} from "framer-motion"
type Props = {}

export default function BackgroundCircle({} : Props) {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "100%"],
      }}
      transition={{ duration: 2.5 }}
      className="flex items-center justify-center relative"
    >
      <div className="absolute border border-[#333333] rounded-full w-[150px] h-[150px] mt-52 animate-ping " />
      <div className="absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 opacity-20" />
      <div className="absolute border border-[#333333] rounded-full w-[400px] h-[400px] mt-52 opacity-20" />
      <div className="absolute border border-[#f7abba] rounded-full w-[550px] h-[550px] mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 opacity-20" />
      <div />
    </motion.div>
    )
};