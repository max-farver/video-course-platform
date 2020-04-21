import { auth } from "firebase"
import Link from "next/link"
import { useAppState } from "../utils/appContext"

const Home = () => {
  const { user } = useAppState()

  const logoutUser = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    })
  }
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold font-display p-4">
        Video Course Platform
      </h1>
      <h2 className="text-3xl font-display px-6">{user?.email}</h2>
      <p className="px-6">functionality only for testing ideas</p>
      <div>
        <Link href="/protected/dashboard">
          <a className="text-xl">Dashboard</a>
        </Link>
      </div>
      <div className="mt-4">
        <button
          className="max-w-xs mx-auto bg-gray-500 py-1 px-4 rounded-full"
          onClick={logoutUser}
        >
          Logout
        </button>

        <Link href="/login">
          <a className="max-w-xs mx-auto bg-gray-500 py-1 px-4 rounded-full">
            Login
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
