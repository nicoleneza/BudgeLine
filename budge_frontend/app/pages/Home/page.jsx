"use client";
import React from "react";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import Navbar from "@/app/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={`w-full flex flex-row mx-auto mt-10 max-h-full `}>
        <div className="w-1/2 grid grid-flow-row items-center h-1/3  text-blue-700 justify-center ">
          <span className="text-3xl">
            Make faster decisions
            <br />
            More confident
            <br />
            Regarding your money
          </span>
          <div>
            <button className="w-5/6 h-[50px]  flex text-white font-bold items-center justify-center rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={"/home.png"} alt="home image" width={500} height={600} />
        </div>
      </div>
      <div className="w-11/12 h-auto py-10 relative bg-gray-200 rounded-lg mx-auto flex flex-row text-lg gap-x-36 items-center justify-center">
        <div className=" flex flex-col ">
          <span className="font-bold text-blue-500">231K</span>
          <span className="flex flex-row gap-x-3">
            <GoDownload className=" h-7" /> Downloads
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-blue-500">231</span>
          <span className="flex flex-row">
            <AiOutlineStar /> Downloads
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-blue-500">231</span>
          <span className="flex flex-row">
            <TbWorld className=" w-[32px]" /> Languages
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-blue-500">231</span>
          <span className="flex flex-row">
            <BsBank />
            bank connections
          </span>
        </div>
      </div>
      <div>
        <div className='absolute left-20 mt-5 text-3xl'>
          <span className=' text-blue-400 font-bold'>Why use budgeline</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
