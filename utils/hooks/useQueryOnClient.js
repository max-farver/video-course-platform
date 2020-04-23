import { useState, useEffect } from "react"

export const useQueryOnClient = (queryFunction, variables = {}) => {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      if (variables !== {}) {
        setData(await queryFunction(variables))
      } else {
        setData(await queryFunction())
      }
    }
    getData()
  }, [])
  return data
}
