import { checkUserCredentials } from "../../utils/auth/checkUserCredentials"
import { useAppState } from "../../utils/appContext"
import { useState, useEffect } from "react"
import { getAllSeriesForDashboard } from "../../utils/datocms/api"
import { useQueryOnClient } from "../../utils/hooks"

const Dashboard = () => {
  const { user } = useAppState()
  const data = useQueryOnClient(getAllSeriesForDashboard)

  return <div></div>
}

export const getServerSideProps = async (ctx) => {
  await checkUserCredentials(ctx)
  return { props: {} }
}

export default Dashboard
