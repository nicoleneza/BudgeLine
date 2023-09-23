import React from 'react'
import { SiFacebook } from 'react-icons/si'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {


  return (
    <div className=' border-black border-2 w-3/5 h-auto flex flex-row '> 

    <div className=" w-1/2 bg-black h-auto">
      <div className=' '>
<h1>jkhgdfgh</h1>
      </div>
      </div>

    <div className=' w-1/2 flex flex-col gap-y-5 py-16   px-24'> 
    <div className='flex flex-row gap-4'>
      <div className='flex flex-col'>
      <h1 className='text-blue-500 text-2xl font-bold'>Sign Up</h1>
      <span className='font-bold text-1xl text-gray-500'>Sign up to create a BudgeLine account</span>
      </div>
      <span className='text-black-600 font-bold'>1 of 4</span>
    </div>

    <form>
    <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Password
  </span>
  <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
  <input type="submit"  class="mt-1 px-3 py-2 bg-blue-500 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1 font-bold text-white"/>
</label>
</form>
        <div className='flex flex-col'>
            <span className='flex justify-center mb-5'>Or</span>
               <div className='flex flex-row gap-6 justify-center'>
                <span className='cursor-pointer'>
                  <SiFacebook style={{color:'blue',width:'30px',height:'30px'}} />
                  <span>Facebook</span>
                  </span>
                  <span  className='cursor-pointer'>
                  <BsApple style={{width:'30px',height:'30px'}}/>
                  <span>App store</span>
                  </span>
                  <span  className='cursor-pointer'>
                    <FcGoogle style={{width:'30px',height:'30px'}}/>
                    <span>Google</span>
                  </span>
                </div>
        </div>
        <div>
          <span>Don't have an account?</span>
          <span className='cursor-pointer text-blue-500 font-bold'>Sign Up</span>
        </div>
    </div>
    </div>
  )
}

export default Signup