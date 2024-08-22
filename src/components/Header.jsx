"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const navs = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Service",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const pathName = usePathname();
  const router = useRouter();
  const handleGoLoginPage = () => {
    router.push("/login");
  };
  return (
    <nav className="font-bold text-white flex justify-between items-center bg-green-500 py-5 px-5">
      <Link href="/">
        <div>
          Next <span className="text-cyan-300">Hero</span>{" "}
        </div>
      </Link>

      <div className="flex gap-10 ">
        {navs.map((nav, idx) => (
          <Link
            href={nav?.path}
            key={idx}
            className={` ${nav?.path == pathName && " text-cyan-300"}`}
          >
            {nav?.title}{" "}
          </Link>
        ))}
      </div>

      <button
        onClick={() => handleGoLoginPage()}
        className="btn btn-primary text-white"
      >
        Login
      </button>
    </nav>
  );
};

export default Header;
<h1>Header</h1>;
