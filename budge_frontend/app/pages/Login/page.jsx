'use client'
import { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
// import Email from "next-auth/providers/email";
// import signup from '@/assets/budgeline/signup'

const Signup = () => {
  const [variant, setVariant] = useState("login");
  const [loginData, setLoginData] = useState({
    Email: "",
    password: "",
  });
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" border-none border-2 w-3/5 max-h-full flex flex-row h-screen mx-auto place-items-center ">
      <div className={`w-1/2 bg-blue-300 h-3/5 overflow-hidden `}>
        <div className="flex flex-col text-3xl  items-center p-10 text-blue-700 ">
          <span className=" font-bold">Make faster decisions</span>
          <span>More confident</span>
          <span>Regarding your money</span>
          <div className=''>
            <Image src={'/undraw_Credit_card_re_blml-removebg-preview.png'} alt='login' width={500} height={50}/>
          </div>
        </div>
        </div>

      <div className=" w-1/2 flex flex-col gap-y-5 py-16   px-24">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <h1 className="text-blue-500 text-2xl font-bold">Login</h1>
            {/* <span className="font-bold   text-sm text-gray-500">
              Sign up to create a BudgeLine account
            </span> */}
          </div>
        </div>

        <form onClick={SubmitHandler}>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
              onChange={(e) => {
                setLoginData(prevState({
                  ...prevState,
                  Email:e.target.value
                }))
              }}
              value={loginData.Email}
            />
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="password"
              onChange={(e) => {
               setLoginData(prevState({
                ...prevState,
                password: e.target.value
               }))
              }}
              value={loginData.password}
            />
               <span className='font-light text-blue-400 hover:underline cursor-pointer'>forgot your password?</span>
            <input
              type="submit"
              class="mt-5 px-3 py-2 bg-blue-500 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1 font-bold text-white"
              value='Log In'
            />
          </label>
        </form>
        <div className="flex flex-col">
          <div className='flex items-center gap-x-3' >
            <div className='flex-1 border-t-2'></div>
          <span className="flex justify-center mx-0 my-10">Or</span>
          <div className='flex-1 border-t-2 '></div>
          </div>
          <div className="flex flex-row gap-x-6 justify-center">
            <span className="cursor-pointer">
              <SiFacebook
                style={{ color: "blue", width: "30px", height: "30px" }}
              />
              <span className="">Facebook</span>
            </span>
            <span className="cursor-pointer">
              <BsApple style={{ width: "30px", height: "30px" }} />
              <span>App store</span>
            </span>
            <span className="cursor-pointer">
              <FcGoogle style={{ width: "30px", height: "30px" }} />
              <span>Google</span>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <span>Don't have an account?</span>
          <span className="cursor-pointer text-blue-500 font-bold">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
