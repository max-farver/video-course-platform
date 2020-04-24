import Nav from "./nav/Nav"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="mt-10">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
