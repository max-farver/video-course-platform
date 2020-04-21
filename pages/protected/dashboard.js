import { checkUserCredentials } from "../../utils/auth/checkUserCredentials"
import { request } from "../../utils/datocms"
import { useAppState } from "../../utils/appContext"

const Dashboard = () => {
  const { user } = useAppState()

  return (
    <div>
      <h1 className="text-6xl text-center">Dashboard</h1>
    </div>
  )
}

const DASHBOARD_QUERY = `
  query DASHBOARD_QUERY {
    allSeries {
      seriesName
      video {
        name
        description
      }
    }
  }
`

export const getServerSideProps = async (ctx) => {
  await checkUserCredentials(ctx)
  return { props: {} }
}

export default Dashboard
