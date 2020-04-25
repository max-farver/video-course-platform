import Layout from "../components/layout/Layout"

const contact = () => {
  return (
    <Layout>
      <div className="section lg:grid grid-cols-2 gap-8 pt-16">
        {/* <section>
          <h1 className="text-5xl">Get In Touch</h1>
          <p>
            
          </p>
        </section> */}
        <div className="max-w-lg mx-auto lg:flex flex-col justify-center">
          <h1 className="text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-9">
            Get in touch
          </h1>
          <p className="mt-3 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
          <dl className="mt-8 text-base leading-6 text-gray-500">
            <div>
              <dt className="sr-only">Postal address</dt>
              <dd>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div>
            <div className="mt-6">
              <dt className="sr-only">Phone number</dt>
              <dd className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-3 font-body">+1 (555) 123-4567</span>
              </dd>
            </div>
            <div className="mt-3">
              <dt className="sr-only">Email</dt>
              <dd className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLineCap="round"
                    strokeLineJoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-3 font-body">support@example.com</span>
              </dd>
            </div>
          </dl>
        </div>
        <form className="bg-primary-900 p-6 text-gray-50 max-w-md mx-auto rounded-md mt-6 lg:mt-0">
          <div className="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-5"
              >
                First name
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="first_name"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-5 "
              >
                Last name
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="last_name"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 "
              >
                Email address
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="email"
                  type="email"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-5 "
              >
                Country / Region
              </label>
              <div className="mt-1 rounded-md ">
                <select
                  id="country"
                  className="text-gray-900 form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium leading-5 "
              >
                Street address
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="street_address"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-5 "
              >
                City
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="city"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-5 "
              >
                State / Province
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="state"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium leading-5 "
              >
                ZIP / Postal
              </label>
              <div className="mt-1 rounded-md ">
                <input
                  id="zip"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full sm:w-auto px-12 py-2 text-gray-900 font-body tracking-wide font-bold mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default contact
