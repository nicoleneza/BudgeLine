
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const NavLinks = [
    { title: "Home", href: "/pages/Home" },
    { title: "About", href: "/About" },
    { title: "Reviews", href: "/Reviews" },
    { title: "Dashboard", href: "/Dashboard" },
  ];
  const buttonLinks = [
    { title: "Login", href: "/pages/Login" },
    { title: "Sign up", href: "/pages/Signup" },
  ];
  return (
    <div className=" w-full h-20  border-b-2  text-black flex items-center gap-10 sticky">
      <nav className=" flex flex-row gap-20 mx-10 text-[rgba(82, 101, 222, 1)] text-1xl font-inter  ml-26">
        <div className="   mx-20  ">
          <span className="text-4xl font-bold text-blue-500">BudgeLine</span>
        </div>
        <div className="flex flex-row gap-5">
          {NavLinks.map((items) => (
            <Link href={items?.href} key={items?.href} className={`font-bold  text-blue-500 flex gap-5 items-center hover:underline underline-offset-4 decoration-[4px] ${pathname ===items?.href && ' underline-offset-2 under'}`}>
              {items?.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-row gap-12 ">
          {/* <button className=' border-black-3 font-bold w-44 h-12 rounded-full border'> */}
          {buttonLinks.map((items) => (
            <button
              key={items?.href}
              className=" border-black-3 font-bold w-44 h-12 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-400 hover:text-white "
            >
              <Link href={items?.href} key={items?.href}>
                {items?.title}
              </Link>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
