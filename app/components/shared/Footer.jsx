import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    // <div className=''>
        <footer className=' flex flex-row  px-40  py-28   gap-x-12 bg-black text-white h-96'>
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

        </footer>
    // </div>
  )
}

export default Footer