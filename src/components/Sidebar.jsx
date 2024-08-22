"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/addproduct",
    title: "Add Product",
  },
  {
    path: "/dashboard/manageproduct",
    title: "Manage Product",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <aside className="px-10">
      <h1 className="text-3xl text-white my-20 font-bold">Dashboard</h1>
      <div className="flex flex-col gap-4">
        {navLinks.map((navlink, idx) => (
          <div key={idx}>
            <Link
              href={navlink.path}
              className={`${
                navlink?.path == pathName
                  ? "text-blue-500 font-bold"
                  : "text-white"
              }`}
            >
              {" "}
              {navlink.title}{" "}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
  <h1>Dashboard</h1>;
};

export default Sidebar;
