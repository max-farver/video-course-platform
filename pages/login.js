import { auth } from "../utils/auth/firebase"
import { useForm } from "react-hook-form"
import { useAppState } from "../utils/appContext"
import { useRouter, Router } from "next/router"

const Login = () => {
  const router = useRouter()
  const { user, setUser } = useAppState()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async ({ email, password }) => {
    console.log(auth())
    // When the user signs in with email and password.
    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert("Invalid email / password")
      })
    const idToken = await auth().currentUser.getIdToken()
    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken: idToken }),
    })

    setUser(auth().currentUser.email)

    auth().signOut()
    router.push("/")
  }

  user && router.push("/")

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-5xl font-bold">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          className="form-input mt-1 block w-full"
          ref={register}
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          className="form-input mt-1 block w-full"
          ref={register}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-400 rounded-md mt-4"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
