import React from "react";
import Link from "next/link";

export default function Navbar() {
  const NavLinks = [
    { title: "Home", href: "/Home" },
    { title: "About", href: "/About" },
    { title: "Reviews", href: "/Reviews" },
    { title: "Dashboard", href: "/Dashboard" },
  ];
  const buttonLinks = [
    { title: "Login", href: "/Login" },
    { title: "Sign up", href: "/Sign" },
  ];
  return (
    <div className=" w-full h-20  border-b-2  text-black flex items-center gap-10 sticky">
      <nav className=" flex flex-row gap-20 mx-10 text-[rgba(82, 101, 222, 1)] text-1xl font-inter  ml-26">
        <div className="   mx-20  ">
          <span className="text-4xl">BudgeLine</span>
        </div>
        <div className="flex flex-row gap-5">
          {NavLinks.map((items) => (
            <Link href={items?.href} key={items?.href}>
              {items?.title}
            </Link>
          ))}
        </div>
      <div className=" flex flex-row gap-12 ">
        {/* <button className=' border-black-3 font-bold w-44 h-12 rounded-full border'> */}
        {buttonLinks.map((items) => (
          <button key={items?.href} className=" border-black-3 font-bold w-44 h-12 rounded-full border" >
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
