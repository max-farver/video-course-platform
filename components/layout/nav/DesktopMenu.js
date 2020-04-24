import React from "react"
import Link from "next/link"

const DesktopMenu = ({ navLinks }) => {
  return (
    <ul className="flex first:ml-0 text-gray-50">
      {navLinks.map((link) => (
        <Link key={`${link.name}_${link.path}_desktop`} href={link.path}>
          <a className="ml-8">{link.name}</a>
        </Link>
      ))}
    </ul>
  )
}

export default DesktopMenu
