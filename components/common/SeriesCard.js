import React from "react"
import Link from "next/link"

const SeriesCard = ({ series }) => {
  return (
    <Link href={`${series.slug}/home`}>
      <a className="block cursor-pointer relative rounded-lg p-4 overflow-hidden bg-blue-300 flex justify-center align-middle">
        <h3 className="text-xl">{series.seriesName}</h3>
      </a>
    </Link>
  )
}

export default SeriesCard
