import { useRouter } from "next/router"
import { useQueryOnClient } from "../../../utils/hooks"
import { getSeries } from "../../../utils/datocms/api"
import { useState, useEffect } from "react"

const CoursePage = ({ slug }) => {
  const router = useRouter()

  const data = useQueryOnClient(getSeries, { slug: slug })
  return (
    <div>
      {data && (
        <>
          <h1>{data.seriesName}</h1>
          <h3>{data.description}</h3>
        </>
      )}
    </div>
  )
}

export const getServerSideProps = (ctx) => {
  return { props: { slug: ctx.params.course } }
}
export default CoursePage
