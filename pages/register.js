import { auth } from "../utils/auth/firebase";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async ({ email, password, confirm }) => {
    if (password === confirm) {
      let hadError = false;
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          hadError = true;
        });
      if (!hadError) {
        // const idToken = await auth()
        //   .currentUser.getIdToken()
        //   .then(
        //     async (idToken) =>
        //       await fetch("/api/auth/login", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ idToken: idToken }),
        //       })
        //   );

        setUser(auth().currentUser.email);

        // auth().signOut();
        router.push("/");
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-sm mx-auto mt-8 mb-16 md:mt-10 p-4 md:shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold">Register</h1>
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
            className="form-input mt-1 mb-4 block w-full "
            ref={register}
          />
          <label htmlFor="confirm">
            confirm
            {watch("password") === watch("confirm") ? (
              ""
            ) : (
              <span className="ml-8 text-red-600 text-sm">
                passwords must match
              </span>
            )}
          </label>
          <input
            type="password"
            name="confirm"
            className="form-input mt-1 mb-4 block w-full"
            ref={register}
          />
          <div className="flex justify-between">
            <button
              aria-label="Register"
              type="submit"
              className="btn-primary "
            >
              Register
            </button>
            <div className="flex items-center">
              <p className="text-xs tracking-wide">
                Not a Member?{" "}
                <Link href="/login">
                  <a className="font-bold text-primary-800 hover:underline">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
