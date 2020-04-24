import React from "react"
import Layout from "../components/layout/Layout"

const about = () => {
  return (
    <Layout>
      <header id="hero" className="relative h-20 mt-12 -z-1">
        <div className="absolute bottom-0 w-full h-full text-center bg-primary-900 p-4">
          <h1 className="text-5xl font-display text-secondary-500 hero-text-shadow leading-9 mb-1">
            About Me
          </h1>
        </div>
      </header>
      <main>
        <section id="first-section"></section>
        <section id="second-section"></section>
      </main>
    </Layout>
  )
}

export default about
