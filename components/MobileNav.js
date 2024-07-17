"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {usePathname} from "next/navigation"
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-10 text-center text-2xl font-semibold">
          <Link href="/">
            <h1>robertino<span className="text-secondary">.</span></h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-secondary border-b-2 border-secondary"} text-lg hover:text-secondary transition-all`}>
              {link.name}
            </Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav