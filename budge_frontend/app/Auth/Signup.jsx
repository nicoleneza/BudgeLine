"use client"
import { SiFacebook } from 'react-icons/si'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import React, { useState } from 'react'

const Signup = () => {
  // const [variant,setVariant] = useState('login')
  const [signupData,setSignupData] = useState({
    Email : "",
    password : ""
  })

  const handleSignup = async (e) => {
    try {
        e.preventDefault()
        setLoading(true)
        const response = await api().post("/user/create", { ...signupData })
        const { data } = response.data
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        setUser(data.user)
        setAuthenticated(true)
        setViewSignup(false)
    }
    catch (e) {
        toast.error(e.response.data.message)
        console.log(e)
    }
    finally {
        setLoading(false)
    }
}

  const SubmitHandler = (e)=>{
    e.preventDefault()
  }


  return (
    <div className=' border-black border-2 w-3/5 h-auto flex flex-row '> 

    <div className={ `w-1/2 bg-blue-300 overflow-hidden `}>
      <div className='flex flex-col'>
      <span className=' text-blue-700 font-bold'>Make faster decisions</span>
      <span>More confident</span>
      <span>Regarding your money</span>  
      </div>    
      </div>

    <div className=' w-1/2 flex flex-col gap-y-5 py-16   px-24'> 
    <div className='flex flex-row gap-4'>
      <div className='flex flex-col'>
      <h1 className='text-blue-500 text-2xl font-bold'>Sign Up</h1>
      <span className='font-bold   text-sm text-gray-500'>Sign up to create a BudgeLine account</span>
      </div>
      <span className=' text-sm   font-extrabold  ml-16 text-black-500'>1 of 4</span>
    </div>

    <form onClick = {SubmitHandler}>
    <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" 
         class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
          onChange = {(e)=>{setEmail(e.target.value)}}
          value = {signupData.Email} />
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
    Password
  </span>
  <input type="password" name="password" 
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
          placeholder="password"
          onChange = {(e)=>{setPassword(e.target.value)}}
          value = {signupData.Pa}/>
  <input type="submit"  class="mt-5 px-3 py-2 cursor-pointer bg-blue-500 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1 font-bold text-white"/>
</label>
</form>
        <div className='flex flex-col'>
            <span className='flex justify-center mb-5'>Or</span>
               <div className='flex flex-row gap-6 justify-center'>
                <span className='cursor-pointer '>
                  <SiFacebook style={{color:'blue',width:'30px',height:'30px'}} />
                  <span className='text-xs'>Facebook</span>
                  </span>
                  <span  className='cursor-pointer'>
                  <BsApple style={{width:'30px',height:'30px'}}/>
                  <span className='text-xs'>App store</span>
                  </span>
                  <span  className='cursor-pointer'>
                    <FcGoogle style={{width:'30px',height:'30px'}}/>
                    <span className='text-xs'>Google</span>
                  </span>
                </div>
        </div>
        <div className='flex flex-row justify-center'>
          <span>Don't have an account?</span>
          <span className='cursor-pointer text-blue-500 font-bold'>Sign Up</span>
        </div>
    </div>
    </div>
  )
}

export default Signup