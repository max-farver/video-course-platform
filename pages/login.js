import { auth } from "../utils/auth/firebase"
import { useForm } from "react-hook-form"
import { useAppState } from "../utils/appContext"
import { useRouter } from "next/router"
import Link from "next/link"

import Layout from "../components/layout/Layout"

const Login = () => {
  const router = useRouter()
  const { setUser } = useAppState()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async ({ email, password }) => {
    // When the user signs in with email and password.
    let hadError = false
    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert("Invalid email / password")
        hadError = true
      })
    if (!hadError) {
      const idToken = await auth()
        .currentUser.getIdToken()
        .then(
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
  }

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
            type="password"
            name="password"
            className="form-input mt-1 mb-4 block w-full"
            ref={register}
          />
          <div className="flex justify-between">
            <button type="submit" className="btn-primary">
              Login
            </button>
            <div className="flex items-center">
              <p className="text-xs tracking-wide">
                Not a Member?{" "}
                <Link href="/register">
                  <a className="font-bold text-primary-800 hover:underline">
                    Sign Up
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
