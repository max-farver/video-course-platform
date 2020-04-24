import { checkUserCredentials } from "../utils/auth/checkUserCredentials"
import { useAppState } from "../utils/appContext"
import { useState, useEffect } from "react"
import { getAllSeriesForDashboard } from "../utils/datocms/api"
import { useQueryOnClient } from "../utils/hooks"

import SeriesCard from "../components/common/SeriesCard"

const Dashboard = () => {
  const { user } = useAppState()
  const data = useQueryOnClient(getAllSeriesForDashboard)

  return (
    <div>
      <h1 className="text-6xl text-center">Dashboard</h1>
      <h2 className="text-3xl text-center">Available Video Series</h2>
      <div className="grid grid-cols-3 gap-8 xl:max-w-6xl mx-auto px-8 mt-8">
        {data && data.map((series) => <SeriesCard series={series} />)}
        {data && data.map((series) => <SeriesCard series={series} />)}
        {data && data.map((series) => <SeriesCard series={series} />)}
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  await checkUserCredentials(ctx)
  return { props: {} }
}

export default Dashboard
