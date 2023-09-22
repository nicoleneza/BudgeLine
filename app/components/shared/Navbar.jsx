import React from 'react'
import Link from 'next/link'
import { path } from 'express/lib/application'

export default function Navbar() {
  return (
    <div className=' w-full h-20  border-b-2  text-black flex items-center gap-10 sticky' >
        <div className='   mx-20  '>
            <span className='text-4xl'>BudgeLine</span>
        </div>
        <nav className=' flex flex-row gap-20 mx-10 text-[rgba(82, 101, 222, 1)] text-1xl font-inter  ml-26' >
            <Link href='/Home' className={path==='/Home' ? 'border-b-4' : ""}>
                Home
            </Link>
            <Link href='/Services' className={path==='/Services' ? 'border-b-4' : ""} >
                Services
            </Link>
            <Link href='/About' className={path==='/About' ? 'border-b-4' : ""}>
                How it works
            </Link>
            <Link href='/Reviews' className={path === '/Reviews' ? 'border-b-4' : ""}>
                Reviews
            </Link>
            <Link href='/Dashboard' className = {path === '/Dashoboard' ? 'border-b-4' : ""}>
                Dashboard
            </Link>
        </nav>
        <div className=' flex flex-row gap-12 '>
            <button className=' border-black-3 font-bold w-44 h-12 rounded-full border'>
                <Link href=''>
                    Log In
                </Link>
            </button>
            <button className=' border-black-3 border font-bold w-44 h-12 rounded-full '>
                <Link href=' '>
                    Sign Up
                </Link>
            </button>
        </div>
    </div>
  )
}
