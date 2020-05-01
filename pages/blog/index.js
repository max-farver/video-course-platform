import Link from "next/link"

import Layout from "../../components/layout/Layout"
const Blog = () => {
  return (
    <Layout>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-screen-lg">
          <div>
            <h1 className="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Articles
            </h1>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2  lg:gap-5 lg:items-center">
              <p className="text-xl leading-7 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique quis, repellendus saepe ipsa veritatis suscipit.
              </p>
              <form className="mt-6 flex lg:mt-0 lg:justify-end">
                <input
                  aria-label="Blog Search"
                  type="search"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out lg:max-w-xs"
                  placeholder="Search the knowledge base..."
                />
                <span className="ml-3 flex-shrink-0 inline-flex rounded-md shadow-sm">
                  <button
                    aria-label="Search our blog posts"
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-700 hover:bg-primary-500 focus:outline-none focus:bg-primary-500 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150"
                  >
                    Search
                  </button>
                </span>
              </form>
            </div>
          </div>
          <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 xl:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
            <Link href="blog/asdf">
              <div role="link" className="cursor-pointer">
                <p className="text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">Mar 16, 2020</time>
                </p>
                <div>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-base leading-6 font-semibold text-primary-700 hover:text-primary-600 transition ease-in-out duration-150">
                    Read full story
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
