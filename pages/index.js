import Link from "next/link"
import { useAppState } from "../utils/appContext"

import Layout from "../components/layout/Layout"

const Home = () => {
  const { user, setUser } = useAppState()

  const logoutUser = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    })
    setUser("")
  }

  return (
    <Layout>
      <header
        id="hero"
        className="relative h-hero mt-10
      "
      >
        <div className="relative h-full w-full bg-red-400 -z-1 overflow-hidden">
          <img
            className="absolute bottom-0 h-full"
            src="https://source.unsplash.com/random"
          />
        </div>
        <div className="absolute bottom-0 w-full h-72 text-center bg-primary-hero p-4">
          <h1 className="text-5xl font-display text-secondary-500 hero-text-shadow leading-9 mb-1">
            Justin
            <br />
            Timberlake
          </h1>
          <p className="text-gray-1000 hero-text-shadow">Bankruptcy Finance</p>
          <div className="border-secondary-900 border-b my-3"></div>
          <h3 className="text-4xl text-gray-1000 hero-text-shadow leading-9">
            Over <span>800</span>
            <br />
            Clients Served
          </h3>
          <button className=" font-display bg-secondary-500 px-8 py-1 shadow-md mt-4">
            Get in Touch
          </button>
        </div>
      </header>
      <section id="intro" className="px-4 py-6">
        <div className="">
          <h2 className="section-header">Bankruptcy Financial Specialist</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
          est laboriosam aperiam labore ut ipsa in illum! Necessitatibus
          explicabo voluptas iste? Velit quia ad quisquam, beatae praesentium
          voluptatibus ipsa deserunt, corrupti, at labore veritatis totam!
          Tenetur odio non incidunt!
        </p>
      </section>
      <section id="quote" className="px-4 py-6 bg-gray-100 text-gray-1000">
        <div>
          <p className="italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda, hic eius quisquam quas temporibus vel corrupti
            reiciendis."
          </p>
          <p className="text-right text-2xl font-display">- Dr. House</p>
        </div>
        {/* <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda, hic eius quisquam quas temporibus vel corrupti
            reiciendis.
          </p>
          <p>Dr. House</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda, hic eius quisquam quas temporibus vel corrupti
            reiciendis.
          </p>
          <p>Dr. House</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda, hic eius quisquam quas temporibus vel corrupti
            reiciendis.
          </p>
          <p>Dr. House</p>
        </div> */}
      </section>
      <section id="methods" className="px-4 py-6">
        <div>
          <h2 className="section-header">Bankruptcy Financial Specialist</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
          est laboriosam aperiam labore ut ipsa in illum! Necessitatibus
          explicabo voluptas iste? Velit quia ad quisquam, beatae praesentium
          voluptatibus ipsa deserunt, corrupti, at labore veritatis totam!
          Tenetur odio non incidunt!
        </p>
      </section>
      <section
        id="calculator"
        className="px-4 py-6 bg-primary-100 text-gray-1000"
      >
        <div>
          <h2 className="section-header">Bankruptcy Financial Specialist</h2>
        </div>
        <div className="bg-gray-800 h-64 p-4 text-gray-100">
          Calculator
          <br />
          Here
        </div>
      </section>
      <div id="blog" className="px-4 py-6">
        <input
          type="search"
          name="articleSearch"
          placeholder="Search the knowledge base..."
          className="mb-6 max-w-sm w-full mx-auto px-4 py-2 bg-gray-800 placeholder-gray-600 text-gray-100"
        />
        <div className="shadow-xl p-2 bg-gray-900">
          <h4 className="text-2xl">Article Name</h4>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            accusamus nisi repellendus ipsam culpa voluptatum...
          </p>
          <Link href="">
            <a className="block text-right underline">Read More</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
