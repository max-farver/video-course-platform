import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppState } from "../../../utils/appContext";

const variants = {
  open: { x: 0 },
  closed: { x: "56rem" },
};

const MobileMenu = ({ isShowing, toggle, navLinks }) => {
  const { user, setUser } = useAppState();
  const router = useRouter();
  const logoutUser = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    setUser("");
    router.replace("/login");
  };

  const menuRef = useRef();
  const handleOutsideClick = (e) => {
    if (isShowing && menuRef.current && !menuRef.current.contains(e.target)) {
      toggle();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <motion.div
      className="absolute top-0 right-0 w-56  bg-primary-900 h-screen -z-10"
      animate={isShowing ? "open" : "closed"}
      initial={{ x: "56rem" }}
      variants={variants}
      transition={{ stiffness: 1, duration: 0.3 }}
      ref={menuRef}
    >
      <ul className="flex flex-col pt-16 px-4 text-gray-50">
        {navLinks.map((link) => (
          <Link key={`${link.name}_${link.path}_mobile`} href={link.path}>
            <li className="mb-4 px-2 py-2">
              <a>{link.name}</a>
            </li>
          </Link>
        ))}
        <li className="border-b mb-4"></li>
        {user ? (
          <li key={`$user_nav_desktop`}>
            <button
              aria-label="Logout current user"
              onClick={logoutUser}
              className="inline px-2 py-2"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link key={`$user_nav_desktop`} href="login">
              <a className="px-2 py-2">Login</a>
            </Link>
          </li>
        )}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
