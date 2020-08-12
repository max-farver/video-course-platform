import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppState } from "../../../utils/appContext";
import { auth } from "firebase";

const DesktopMenu = ({ navLinks }) => {
  const { user, setUser } = useAppState();
  const router = useRouter();

  const logoutUser = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    auth().signOut();
    setUser("");
    router.replace("/login");
  };

  return (
    <ul className="flex first:ml-0 text-gray-50">
      {navLinks.map((link) => (
        <li>
          <Link key={`${link.name}_${link.path}_desktop`} href={link.path}>
            <a className="ml-8">{link.name}</a>
          </Link>
        </li>
      ))}
      {user ? (
        <li key={`$user_nav_desktop`}>
          <button
            aria-label="Logout current user"
            onClick={logoutUser}
            className="inline ml-8"
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <Link key={`$user_nav_desktop`} href="login">
            <a className="ml-8">Login</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default DesktopMenu;
