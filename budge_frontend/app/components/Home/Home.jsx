import React from 'react'
import Image  from '@/assets/budgeline/undraw_Online_payments_re_y8f2-removebg-preview.png'
import { GoDownload } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'
import { BsBank } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div>
        <div className='flex flex-row'>
            <span>Make faster decisions</span>
            <span>Make faster decisions</span>
            <span>Make faster decisions</span>
            <img 
            src={Image} 
            alt="" />
        </div>
        <div>
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
      </div>
    </div>
  )
}
