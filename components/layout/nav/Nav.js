import { useWindowSize, useToggle } from "../../../utils/hooks";
import Link from "next/link";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

const navLinks = [
  {
    name: "About",
    path: "/about",
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
];

const Nav = () => {
  const windowSize = useWindowSize();
  const { isToggled: isShowing, toggle } = useToggle(false);

  return (
    <div className="bg-primary-900 fixed top-0 w-full border-b-2 border-secondary-500 z-10">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-baseline px-4 text-gray-50">
        <Link href="/">
          <a className="tracking-wide sm:tracking-normal text-xl sm:text-2xl font-display py-2">
            {windowSize.width > 500
              ? "Northwest Financial Consulting"
              : "NW Financial Consulting"}
          </a>
        </Link>
        {windowSize?.width > 1000 ? (
          <DesktopMenu navLinks={navLinks} />
        ) : (
          <>
            <MobileMenuButton isShowing={isShowing} toggle={toggle} />
            <MobileMenu
              navLinks={navLinks}
              toggle={toggle}
              isShowing={isShowing}
            />
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
