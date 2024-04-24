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
      <div className={`w-full flex flex-row mx-auto mt-10 `}>
        <div className="w-1/2 grid grid-flow-row gap-y-6 items-center text-blue-700 justify-center ">
          <span className="text-3xl">
            Make faster decisions
            <br />
            More confident
            <br />
            Regarding your money
          </span>
          <div>
            <button className=" w-40 h-12 flex text-white font-bold items-center justify-center rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={"/home.png"} alt="home image" width={500} height={500} />
        </div>
      </div>
      <div>
        <span>231</span>
        <span>
          <GoDownload />
          Downloads
        </span>
      </div>
      <div>
        <span>231</span>
        <span>
          <AiOutlineStar />
          Downloads
        </span>
      </div>
      <div>
        <span>231</span>
        <span>
          <TbWorld />
          Languages
        </span>
      </div>
      <div>
        <span>231</span>
        <span>
          <BsBank />
          bank connections
        </span>
      </div>
    </div>
  );
}
