import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useAppState } from "../../../utils/appContext"

const DesktopMenu = ({ navLinks }) => {
  const { user, setUser } = useAppState()
  const router = useRouter()

  const logoutUser = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    })
    setUser("")
    router.reload()
  }

  return (
    <ul className="flex first:ml-0 text-gray-50">
      {navLinks.map((link) => (
        <li>
          <Link key={`${link.name}_${link.path}_desktop`} href={link.path}>
            <a className="ml-8">{link.name}</a>
          </Link>
        </li>
      ))}
      {user ? (
        <li key={`$user_nav_desktop`}>
          <button onClick={logoutUser} className="inline ml-8">
            Logout
          </button>
        </li>
      ) : (
        <Link key={`$user_nav_desktop`} href="login">
          <a className="ml-8">Login</a>
        </Link>
      )}
    </ul>
  )
}

export default DesktopMenu
