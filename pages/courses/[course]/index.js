import { useRouter } from "next/router"
import { useQueryOnClient } from "../../../utils/hooks"
import { getSeries } from "../../../utils/datocms/api"
import { useState, useEffect } from "react"
import Layout from "../../../components/layout/Layout"

const CoursePage = ({ slug }) => {
  const router = useRouter()

  // const data = useQueryOnClient(getSeries, { slug: slug })
  return (
    <Layout>
      <h1 className="mt-32 pl-40">COMING SOON</h1>
    </Layout>
  )
}

// export const getServerSideProps = (ctx) => {
//   return { props: { slug: ctx.params.course } }
// }
export default CoursePage
