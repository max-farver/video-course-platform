import { useWindowSize, useToggle } from "../../../utils/hooks"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import MobileMenuButton from "./MobileMenuButton"

const navLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Courses",
    path: "/courses",
  },
]

const Nav = () => {
  const windowSize = useWindowSize()
  const { isToggled: isShowing, toggle } = useToggle(false)

  return (
    <div className="bg-primary-100 fixed top-0 w-full border-b-2 border-secondary-500 z-100">
      <nav className="max-w-6xl mx-auto flex justify-between items-baseline px-4 text-gray-1000">
        <h1 className="text-2xl font-display py-2">J. T.</h1>
        {windowSize?.width > 1000 ? (
          <DesktopMenu navLinks={navLinks} />
        ) : (
          <>
            <MobileMenuButton isShowing={isShowing} toggle={toggle} />
            <MobileMenu navLinks={navLinks} isShowing={isShowing} />
          </>
        )}
      </nav>
    </div>
  )
}

export default Nav
