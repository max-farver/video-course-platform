import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { useOutsideClick } from "../../../utils/hooks"

const variants = {
  open: { x: 0 },
  closed: { x: "160px" },
}

const MobileMenu = ({ isShowing, toggle, navLinks }) => {
  const menuRef = useRef()

  const handleOutsideClick = (e) => {
    if (isShowing && menuRef.current && !menuRef.current.contains(e.target)) {
      toggle()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  })

  return (
    <motion.div
      className="absolute top-0 right-0 w-40 text-center bg-primary-900 h-screen -z-10"
      animate={isShowing ? "open" : "closed"}
      initial={{ x: 160 }}
      variants={variants}
      transition={{ stiffness: 1, duration: 0.2 }}
      ref={menuRef}
    >
      <ul className="flex flex-col pt-16 px-4 text-gray-50">
        {navLinks.map((link) => (
          <Link key={`${link.name}_${link.path}_mobile`} href={link.path}>
            <a className="mb-4">{link.name}</a>
          </Link>
        ))}
      </ul>
    </motion.div>
  )
}

export default MobileMenu
