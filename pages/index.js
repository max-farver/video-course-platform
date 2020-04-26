import Link from "next/link"
import { useAppState } from "../utils/appContext"

import Layout from "../components/layout/Layout"

const Home = () => {
  const { user, setUser } = useAppState()

  return (
    <Layout>
      <header id="hero" className="relative h-hero">
        <div className="relative h-full w-full bg-gray-200 -z-10 overflow-hidden"></div>
        <div className="md:flex flex-col justify-center absolute bottom-0 md:right-0 w-full md:w-1/2 xl:w-2/5 md h-72 md:h-full text-center md:text-left bg-primary-hero p-4">
          <h1 className="text-5xl font-display text-secondary-500 hero-text-shadow leading-10 mb-1">
            Justin
            <br />
            Timberlake
          </h1>
          <p className="text-gray-50 hero-text-shadow tracking-wide">
            Bankruptcy Finance
          </p>
          <div className="border-secondary-100 border-b my-3 md:max-w-xs"></div>
          <h3 className="text-4xl text-gray-50 hero-text-shadow leading-9">
            Over <span>800</span>
            <br />
            Clients Served
          </h3>
          <Link href="contact">
            <a className="max-w-xs mx-auto text-xl md:ml-0 btn-secondary mt-4">
              Get in Touch
            </a>
          </Link>
        </div>
      </header>
      <main>
        <section
          id="intro"
          className="section md:flex flex-row justify-between"
        >
          <div className="md:w-1/2 self-center md:flex flex-col justify-center">
            <div>
              <div className="">
                <h2 className="section-header">
                  Bankruptcy Financial Specialist
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sit est laboriosam aperiam labore ut ipsa in illum!
                Necessitatibus explicabo voluptas iste? Velit quia ad quisquam,
                beatae praesentium voluptatibus ipsa deserunt, corrupti, at
                labore veritatis totam! Tenetur odio non incidunt!
              </p>
            </div>
            <Link href="about">
              <a className="max-w-xs mx-auto md:ml-0 text-xl md:text-2xl btn-primary mt-4 md:mt-16 ">
                My Background
              </a>
            </Link>
          </div>
          <div className="hidden md:block w-56 bg-gray-700 h-96 w-96"></div>
        </section>
        <section
          id="quote"
          className="px-4 py-6 bg-gray-800 text-gray-50 flex flex-row justify-evenly flex-wrap content-around md:h-108"
        >
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="quote">
              <p className="italic text-gray-50">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                assumenda, hic eius quisquam quas temporibus vel corrupti
                reiciendis."
              </p>
              <p className="text-right text-2xl font-display text-gray-50">
                - Dr. House
              </p>
            </div>
          </div>
          <div className="hidden md:block w-1/2 lg:w-1/3">
            <div className="quote">
              <p className="italic text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                assumenda, hic eius quisquam quas temporibus vel corrupti
                reiciendis.
              </p>
              <p className="text-right text-2xl font-display text-gray-50">
                - Dr. House
              </p>
            </div>
          </div>
          <div className="hidden md:block w-1/2 lg:w-1/3">
            <div className="quote">
              <p className="italic text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                assumenda, hic eius quisquam quas temporibus vel corrupti
                reiciendis.
              </p>
              <p className="text-right text-2xl font-display text-gray-50">
                - Dr. House
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-1/3">
            <div className="quote">
              <p className="italic text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                assumenda, hic eius quisquam quas temporibus vel corrupti
                reiciendis.
              </p>
              <p className="text-right text-2xl font-display text-gray-50">
                - Dr. House
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-1/3">
            <div className="quote">
              <p className="italic text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                assumenda, hic eius quisquam quas temporibus vel corrupti
                reiciendis.
              </p>
              <p className="text-right text-2xl font-display text-gray-50">
                - Dr. House
              </p>
            </div>
          </div>
        </section>
        <section
          id="methods"
          className="section md:flex flex-row justify-between items-center"
        >
          <div className="hidden md:block w-56 bg-gray-700 h-96 w-96"></div>
          <div className="md:w-1/2">
            <div>
              <h2 className="section-header">
                Bankruptcy Financial Specialist
              </h2>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              provident, alias nulla blanditiis earum facere quisquam! Repellat
              nisi ullam voluptas quas error? Nisi, ut tenetur alias itaque unde
              esse incidunt, pariatur similique placeat nostrum, assumenda
              perferendis molestias eligendi beatae earum ipsum quis ex
              voluptatem quibusdam doloribus. Repellendus doloremque,
              necessitatibus rem blanditiis esse quisquam nisi unde accusamus
              ducimus voluptatem, illo quidem?
            </p>
          </div>
        </section>
        <section id="calculator" className="bg-primary-900 text-gray-50">
          <div className="section md:flex flex-row justify-between items-center">
            <div className="md:w-1/2">
              <h2 className="section-header mb-2 text-primary-50">
                Can Declaring Bankruptcy Help Me?
              </h2>
              <p className="text-primary-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat laborum repellendus optio, saepe pariatur et mollitia
                iure qui veniam iusto beatae necessitatibus fugiat incidunt?
                Voluptates soluta perferendis debitis iure iusto tempora
                perspiciatis vitae, modi veniam, rem asperiores blanditiis nulla
                corporis quia. Ipsum nisi error amet dolorum quam fugit
                aspernatur minima.
              </p>
            </div>
            <div className="mt-6 md:mt-0 bg-gray-200 h-72 w-full md:w-96 p-4 text-gray-900">
              Calculator
              <br />
              Here
            </div>
          </div>
        </section>
        <section
          id="blog-intro"
          className="bg-white pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8"
        >
          <div className="max-w-lg mx-auto lg:max-w-6xl">
            <div className="grid gap-16 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
              <div>
                <p className="text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Boost your conversion rate
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-base leading-6 font-bold tracking-wide text-primary-700 hover:text-primary-500 transition ease-in-out duration-150"
                  >
                    Read full story
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Boost your conversion rate
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-base leading-6 font-bold tracking-wide text-primary-700 hover:text-primary-500 transition ease-in-out duration-150"
                  >
                    Read full story
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Boost your conversion rate
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-base leading-6 font-bold tracking-wide text-primary-700 hover:text-primary-00 transition ease-in-out duration-150"
                  >
                    Read full story
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link href="blog">
                  <a className="max-w-xs text-2xl btn-primary cursor-pointer">
                    View All Posts
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
