import { useState } from "react"
export const useToggle = (initialValue) => {
  const [isToggled, setToggled] = useState(initialValue)
  const toggle = () => setToggled((prev) => !prev)
  return { isToggled, setToggled, toggle }
}
