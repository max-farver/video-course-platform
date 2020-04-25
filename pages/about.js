import React from "react"
import Layout from "../components/layout/Layout"
import SectionHeader from "../components/common/sections/SectionHeader"

const About = () => {
  return (
    <Layout>
      <header id="hero" className="relative h-20 mt-2 -z-1 md:hidden">
        <div className="absolute bottom-0 w-full h-full text-center bg-primary-900 p-4">
          <h1 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            About Me
          </h1>
        </div>
      </header>
      <main className="section md:grid grid-cols-2 gap-8">
        <article id="first-section">
          <h1 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mt-10 mb-6">
            About Me
          </h1>
          <SectionHeader>Background</SectionHeader>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus doloribus optio officia inventore. Deserunt harum,
            explicabo et voluptatem magnam commodi quisquam nemo aperiam
            possimus delectus exercitationem ipsa quia id excepturi nihil itaque
            beatae eveniet laudantium dolores, repellat sit neque sed alias
            maiores! Earum laudantium commodi adipisci ad, ipsum suscipit
            reiciendis at vero, tempora cumque consequatur animi cupiditate
            labore recusandae laborum!
          </p>
          <SectionHeader>Gaining Traction</SectionHeader>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ipsum laboriosam quasi odio nostrum quos architecto
            voluptate itaque, blanditiis minus quibusdam explicabo hic incidunt
            earum. Consectetur provident consequuntur laboriosam facilis amet
            magni nesciunt error doloremque iusto laudantium quos deserunt,
            corrupti pariatur repudiandae fugiat expedita fugit, dignissimos
            hic, iure accusamus voluptate temporibus numquam quibusdam. Eaque a
            totam repudiandae sint id modi!
          </p>
          <SectionHeader>Education</SectionHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sapiente illo tempore ipsum voluptatum dolorum culpa nesciunt
            repellendus, nemo ratione, porro harum odit temporibus, quia quae
            sint veniam sequi quaerat.
          </p>
          <ul className="list-outside list-disc ml-8 mt-2 text-gray-700">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </article>
        <aside className="hidden md:block">
          <div className="sticky top-0 max-w-sm ml-auto pt-32">
            <div className="h-72 bg-primary-900 p-24 ">
              <span className="text-primary-50">fun facts, image, etc</span>
            </div>
          </div>
        </aside>
      </main>
    </Layout>
  )
}

export default About
