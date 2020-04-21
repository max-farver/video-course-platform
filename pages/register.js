import { auth } from "../utils/auth/firebase"
import { useForm } from "react-hook-form"

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async ({ email, password, confirm }) => {
    if (password === confirm) {
      await auth().createUserWithEmailAndPassword(email, password)
      const idToken = await auth().currentUser.getIdToken()
      await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: idToken }),
      })
      auth().signOut()
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-5xl font-bold">Register</h1>
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
        <label htmlFor="confirm">
          confirm {"    "}{" "}
          {watch("password") === watch("confirm") ? "" : "passwords must match"}
        </label>
        <input
          type="text"
          name="confirm"
          className="form-input mt-1 block w-full"
          ref={register}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-400 rounded-md mt-4"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
