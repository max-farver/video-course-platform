import React, { createContext, useContext, useState, useEffect } from "react"
import { useCookie } from "./hooks"
// set defaults
export const AppContext = createContext({
  user: null,
})
export const PageWrapper = ({ children }) => {
  const [userCookie, setUserCookie] = useCookie("user")
  const [user, setUser] = useState(userCookie)

  useEffect(() => {
    setUserCookie(user)
  }, [user])

  return (
    <AppContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useAppState = () => {
  return useContext(AppContext)
}
