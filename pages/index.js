import Link from "next/link"
import { useAppState } from "../utils/appContext"
import { useWindowSize, useToggle } from "../utils/hooks"
import { useForm } from "react-hook-form"
import { NextSeo } from "next-seo"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout/Layout"
import FSImage from "../components/common/FSImage"
import Modal from "../components/common/Modal"

const Home = () => {
  const { user, setUser } = useAppState()
  const windowSize = useWindowSize()
  const { register, handleSubmit, watch, errors } = useForm()
  const { isToggled: modalIsShowing, toggle: modalToggle } = useToggle(false)

  const calculateViability = ({
    totalAssets,
    totalLiabilities,
    annualMargin,
  }) => {
    modalToggle()
  }

  return (
    <Layout>
      <NextSeo title="Home" description="This is neato-burrito" />
      <header id="hero" className="relative h-hero">
        <div className="relative h-full w-full bg-gray-200 -z-10 overflow-hidden">
          {windowSize.width > 1920 && (
            <FSImage src="hero-example-full-res-cropped.jpg" alt="" />
          )}
          {windowSize.width <= 1920 && windowSize.width > 950 && (
            <FSImage src="hero-example-1920.jpg" alt="" />
          )}
          {windowSize.width <= 950 && windowSize.width > 500 && (
            <FSImage src="hero-example-med.jpg" alt="" />
          )}
          {windowSize.width <= 500 && (
            <FSImage src="hero-example-phone.jpg" alt="" />
          )}
        </div>
        <div className="md:flex flex-col justify-center absolute bottom-0 md:left-0 w-full md:w-1/2 xl:w-2/5 md h-72 md:h-full text-center md:text-right bg-primary-hero p-4">
          <h1 className="text-3xl font-display text-secondary-500 hero-text-shadow leading-9 mb-1">
            Northwest
            <br />
            Financial Consulting
          </h1>
          <div className="border-secondary-100 border-b my-3 mx-auto md:max-w-xs md:mr-0 w-80"></div>
          <h3 className="text-4xl text-gray-50 hero-text-shadow leading-9">
            Over <span>800</span>
            <br />
            Clients Served
          </h3>
          <Link href="contact">
            <a className="max-w-xs mx-auto text-xl md:mr-0 btn-secondary mt-4">
              Get in Touch
            </a>
          </Link>
        </div>
      </header>
      <main>
        <Fade>
          <section
            id="intro"
            className="section py-12 md:py-20 md:flex flex-row justify-between"
          >
            <div className="md:w-1/2 self-center md:flex flex-col justify-center">
              <div>
                <div className="">
                  <h2 className="section-header">
                    Bankruptcy Financial Specialist
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta sit est laboriosam aperiam labore ut ipsa in illum!
                  Necessitatibus explicabo voluptas iste? Velit quia ad
                  quisquam, beatae praesentium voluptatibus ipsa deserunt,
                  corrupti, at labore veritatis totam! Tenetur odio non
                  incidunt!
                </p>
              </div>
              <Link href="about">
                <a className="max-w-xs mx-auto md:ml-0 text-xl md:text-2xl btn-primary mt-4 md:mt-16 ">
                  My Background
                </a>
              </Link>
            </div>
            <div className="hidden md:block overflow-hidden rounded-md shadow-lg h-84 w-96 relative">
              <FSImage
                src="guys.jpg"
                alt="stock photo of some guys talking business"
              />
            </div>
          </section>
        </Fade>
        <section
          id="quote"
          className="px-4 py-6  py-12 md:py-20 bg-gray-800 text-gray-50 flex flex-row justify-evenly flex-wrap content-around md:h-108"
        >
          <Fade>
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
          </Fade>
        </section>
        <section
          id="methods"
          className="section py-12 md:py-20 md:flex flex-row justify-between items-center"
        >
          <Fade>
            <div className="hidden md:block overflow-hidden rounded-md shadow-lg h-84 w-96 relative">
              <FSImage src="charts.jpg" alt="stock photo of charts" />
            </div>
            <div className="md:w-1/2">
              <div>
                <h2 className="section-header">
                  Bankruptcy Financial Specialist
                </h2>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                provident, alias nulla blanditiis earum facere quisquam!
                Repellat nisi ullam voluptas quas error? Nisi, ut tenetur alias
                itaque unde esse incidunt, pariatur similique placeat nostrum,
                assumenda perferendis molestias eligendi beatae earum ipsum quis
                ex voluptatem quibusdam doloribus. Repellendus doloremque,
                necessitatibus rem blanditiis esse quisquam nisi unde accusamus
                ducimus voluptatem, illo quidem?
              </p>
            </div>
          </Fade>
        </section>
        <section id="calculator" className="bg-primary-900 text-gray-50">
          <Fade>
            <div className="section py-12 md:py-20 md:flex flex-row justify-between items-center">
              <div className="md:w-1/2">
                <h2 className="section-header mb-2 text-primary-50">
                  Chapter 12 or Chapter 13?
                </h2>
                <p className="text-primary-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat laborum repellendus optio, saepe pariatur et mollitia
                  iure qui veniam iusto beatae necessitatibus fugiat incidunt?
                  Voluptates soluta perferendis debitis iure iusto tempora
                  perspiciatis vitae, modi veniam, rem asperiores blanditiis
                  nulla corporis quia. Ipsum nisi error amet dolorum quam fugit
                  aspernatur minima.
                </p>
              </div>
              <div className="mt-6 md:my-4 bg-gray-100 rounded-lg h-72 w-full md:w-96 p-4 text-gray-900">
                <form onSubmit={handleSubmit(calculateViability)}>
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="totalAssets">Total Assets</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm sm:leading-5">
                          $
                        </span>
                      </div>
                      <input
                        name="totalAssets"
                        id="totalAssets"
                        className="form-input block w-32 pl-7 pr-12 sm:text-sm sm:leading-5"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        ref={register}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span
                          className="text-gray-500 sm:text-sm sm:leading-5"
                          id="price-currency"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="totaLiabilities">Total Liabilities</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm sm:leading-5">
                          $
                        </span>
                      </div>
                      <input
                        name="totaLiabilities"
                        id="totaLiabilities"
                        className="form-input block w-32 pl-7 pr-12 sm:text-sm sm:leading-5"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        ref={register}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span
                          className="text-gray-500 sm:text-sm sm:leading-5"
                          id="price-currency"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-10">
                    <label htmlFor="annualMargin">Annual Profit Margin</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm sm:leading-5">
                          $
                        </span>
                      </div>
                      <input
                        id="annualMargin"
                        name="annualMargin"
                        className="form-input block w-32 pl-7 pr-12 sm:text-sm sm:leading-5"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        ref={register}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span
                          className="text-gray-500 sm:text-sm sm:leading-5"
                          id="price-currency"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <button
                      aria-label="Perform a quick check to see if you are viable for bankruptcy"
                      type="submit"
                      className="btn-primary text-2xl mx-auto"
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </section>
        <section
          id="blog-intro"
          className="bg-white pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8"
        >
          <Fade>
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
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
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
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
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
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
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
          </Fade>
        </section>
        <Modal toggle={modalToggle} isShowing={modalIsShowing}>
          <div className="h-108 w-full max-w-sm">
            <h1 className="text-3xl mt-10">You are viable!</h1>
          </div>
        </Modal>
      </main>
    </Layout>
  )
}

export default Home
