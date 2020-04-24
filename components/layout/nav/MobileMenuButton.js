import React from "react"
import { useToggle } from "../../../utils/hooks"
import { motion } from "framer-motion"

const MobileMenuButton = ({ isShowing, toggle }) => {
  return (
    <button onClick={toggle} className="self-center focus:outline-none z-100">
      <svg height="24" width="24">
        <motion.line
          initial={{
            y2: 4,
          }}
          animate={{
            y2: isShowing ? 20 : 4,
          }}
          transition={{ duration: 0.2 }}
          x1="4"
          x2="20"
          y1="4"
          stroke="#F0B428"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.line
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: isShowing ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          stroke="#F0B428"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.line
          initial={{
            y2: 20,
          }}
          animate={{
            y2: isShowing ? 4 : 20,
          }}
          transition={{ duration: 0.2 }}
          x1="4"
          x2="20"
          y1="20"
          stroke="#F0B428"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

export default MobileMenuButton
