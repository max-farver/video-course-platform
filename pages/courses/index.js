import { checkUserCredentials } from "../../utils/auth/checkUserCredentials"
import { useAppState } from "../../utils/appContext"
import Link from "next/link"
import { getAllSeriesForDashboard } from "../../utils/datocms/api"
import { useQueryOnClient } from "../../utils/hooks"
import Layout from "../../components/layout/Layout"

const Dashboard = () => {
  const { user } = useAppState()
  const data = useQueryOnClient(getAllSeriesForDashboard)

  return (
    <Layout>
      <div className="section mb-8">
        <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mt-10 mb-6">
          Your Courses
        </h1>
        <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-12">
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #1
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #2
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #3
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #4
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #5
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #6
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #7
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #8
              </h3>
            </div>
          </Link>
          <Link href="/">
            <div className="rounded-md h-48 bg-gray-300 flex flex-col justify-end overflow-hidden cursor-pointer">
              <h3 className="text-xl bold tracking-wide font-body text-center py-2 text-gray-50 bg-gray-800">
                Course #9
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

// export const getServerSideProps = async (ctx) => {
//   await checkUserCredentials(ctx)
//   return { props: {} }
// }

export default Dashboard
