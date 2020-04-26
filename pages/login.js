import { auth } from "../utils/auth/firebase"
import { useForm } from "react-hook-form"
import { useAppState } from "../utils/appContext"
import { useRouter, Router } from "next/router"

import Layout from "../components/layout/Layout"

const Login = () => {
  const router = useRouter()
  const { user, setUser } = useAppState()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async ({ email, password }) => {
    // When the user signs in with email and password.
    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert("Invalid email / password")
      })
    const idToken = await auth().currentUser.getIdToken()(
      await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: idToken }),
      })
    )

    setUser(auth().currentUser.email)

    auth().signOut()
    router.push("/")
  }

  // user && router.push("/")

  return (
    <Layout>
      <div className="max-w-sm mx-auto mt-8 md:mt-10 p-4 md:shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            className="form-input mt-1 mb-4 block w-full"
            ref={register}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            className="form-input mt-1 mb-4 block w-full"
            ref={register}
          />
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
