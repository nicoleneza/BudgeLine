import React from 'react'
import Link from 'next/link'
import { AiOutlineApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs"
import { FaTwitter} from "react-icons/fa"
import { AiFillInstagram , AiFillLinkedin } from "react-icons/ai"


const Footer = () => {
  return (
    <div className='flex flex-col fixed bottom-0 left-0 border-bottom-2 border w-full '>

        <footer className=' flex flex-row  px-40   py-10 gap-x-12  h-72'>
            <div className='title'>
                <span className='  mr-36 text-4xl'>
                    BudgeLine
                </span>
                </div> 

                <div className=' flex flex-col text-2lg'>
                    <span className=' font-bold mb-3'>
                        Explore
                    </span>
                    <div className=' flex flex-col gap-y-4'>
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
                </div>

                <div className='flex flex-col text-2lg'>
                    <span className='font-bold mb-3'>Get started</span>  
                    <div className=' flex flex-col gap-y-4'>
                    <Link href='/'>
                        Sign up
                    </Link>
                    <Link href='/'>
                        Login In
                    </Link>
                    <Link href=''>
                        Online budgeting goals
                    </Link>
                    <Link href=''>
                      How to make a budget 
                    </Link>
                    </div>
                </div>

                <div className='flex flex-col text-2lg'>
                    <span className='font-bold mb-3'>Get help</span>
                    <div className=' flex flex-col gap-y-4'>
                    <Link href='/'>
                        How to videos
                    </Link>
                    <Link href='/'>
                        Contact Us
                    </Link>
                    </div>
                </div>


                <div className=' w-auto h-auto flex flex-col gap-y-10 justify-items-end   ml-52'>
                    <button className='bg-black  w-52 rounded-xl flex flex-row items-center gap-3  h-20 justify-center'> 
                    <AiOutlineApple  style={{ color: 'white', width:'40px', height:'30px'}}/>
                    <span className='flex flex-col font-bold'>
                    <span className=' text-white '>Download on</span>
                    <span className='text-white'>App store</span>
                    </span>
                    </button>

                    <button className='bg-black  w-52 rounded-xl flex flex-row items-center gap-3  h-20 justify-center'> 
                    <BiLogoPlayStore  style={{ color: 'white', width:'40px', height:'30px'}}/>
                    <span className='flex flex-col font-bold'>
                    <span className=' text-white '>Get it on</span>
                    <span className='text-white'>Play store</span>
                    </span>
                    </button>
                    <div className="flex items-center gap-4">
						<a
							className="flex items-center px-2"
							href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
							target="_blank" rel="noreferrer"
						>
							<BsFacebook  className="text-xl rounded-full border border-black" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://github.com/NdungutseCharles103"
							target="_blank"
							rel="no-referrer noreferrer"
						>
							<FaTwitter className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://www.facebook.com/ishimwendungutsecharles"
							target="_blank"
							rel="no-referrer noreferrer"
						>
							<AiFillInstagram className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://www.instagram.com/ndungutse_charles/"
							target="_blank"
							rel="no-referrer noreferrer"
						>
							<AiFillLinkedin className="text-xl" />
						</a>
					</div>

                </div>
        </footer>
        <p className='  bg-slate-100 w-full h-12 flex items-center justify-center'>&copy;copyright@BUDGELINE 2023 All rights reserved</p>
        </div>
    // </div>
  )
}

export default Footer