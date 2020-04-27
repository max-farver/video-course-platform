import React from "react"

const SectionHeader = ({ children, size = null }) => {
  return (
    <div>
      <h2 className={`section-header ${size || ""}`}>{children}</h2>
    </div>
  )
}

export default SectionHeader
