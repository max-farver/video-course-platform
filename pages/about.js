import React from "react"
import Layout from "../components/layout/Layout"
import SectionHeader from "../components/common/sections/SectionHeader"
import FSImage from "../components/common/FSImage"

const About = () => {
  return (
    <Layout>
      <main className="section md:grid grid-cols-2 gap-8">
        <article id="first-section">
          <h1 className="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mt-2 mb-6 md:my-6">
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
        <aside className="">
          <div className="md:sticky top-0 sm:max-w-sm mx-auto md:mr-0 pt-8 md:pt-32 rounded-lg">
            <div className="h-108 bg-primary-900 p-4 rounded-lg">
              <div className="relative overflow-hidden rounded-lg h-56">
                <FSImage src="jt-face.jpg" fillHeight={false} />
              </div>
              <div className="mt-2 px-4">
                <h4 className="font-body text-2xl bold text-gray-50 tracking-wide">
                  J.T. Korkow
                </h4>
                <div className="border-b w-36 mr-auto mt-1 mb-4"></div>
                <p className="text-primary-200">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore nam ducimus ex aut provident dicta nobis praesentium a
                  quo.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </Layout>
  )
}

export default About
