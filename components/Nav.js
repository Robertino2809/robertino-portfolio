"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  },
]

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-secondary border-b-2 border-secondary"} font-medium hover:text-secondary transition-all `}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  )
}
export default Nav