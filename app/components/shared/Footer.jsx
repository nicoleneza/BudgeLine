import React from 'react'
import Link from 'next/link'
import { AiOutlineApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";


const Footer = () => {
  return (
    // <div className=''>
        <footer className=' flex flex-row  px-40  py-28   gap-x-12  text-bla h-96'>
            <div className='title'>
                <span className='  mr-36 text-4xl'>
                    BudgeLine
                </span>
                </div> 

                <div className=' flex flex-col text-2xl'>
                    <span className=' font-bold mb-3'>
                        Explore
                    </span>
                        <Link href='/about'>
                            About
                        </Link>
                    <Link href='/Home' className='' >
                Home
            </Link>
            <Link href='/Services' className=''  >
                Services
            </Link>
            <Link href='/About' className=''>
                How it works
            </Link>
            <Link href='/Reviews' className=''>
                Reviews
            </Link>
                </div>

                <div className='flex flex-col text-2xl'>
                    <span className='font-bold mb-3'>Get started</span>
                    <Link href='/'>
                        Sign up
                    </Link>
                    <Link href='/'>
                        Login In
                    </Link>
                </div>

                <div className='flex flex-col text-2xl'>
                    <span className='font-bold mb-3'>Get help</span>
                    <Link href='/'>
                        How to videos
                    </Link>
                    <Link href='/'>
                        Contact Us
                    </Link>
                </div>

                <div className='  gap-y-6'>
                    <button className='bg-black  w-52 rounded-xl flex flex-row items-center gap-3  h-20 justify-center'> 
                    <div>
                    <AiOutlineApple  style={{ color: 'white', width:'40px', height:'30px'}}/>
                    </div>
                    <div className='flex flex-col font-bold'>
                    <span className=' text-white '>Download on</span>
                    <span className='text-white'>App store</span>
                    </div>
                    </button>

                    <button className='bg-black  w-52 rounded-xl flex flex-row items-center gap-3  h-20 justify-center'> 
                    <div>
                    <BiLogoPlayStore  style={{ color: 'white', width:'40px', height:'30px'}}/>
                    </div>
                    <div className='flex flex-col font-bold'>
                    <span className=' text-white '>Get it on</span>
                    <span className='text-white'>Play store</span>
                    </div>
                    </button>
                </div>

        </footer>
    // </div>
  )
}

export default Footer