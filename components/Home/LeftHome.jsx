'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
const LeftHome = () => {
  const router = useRouter();
  return (
    <div className='pl-35'>
    <div className='font-bold text-3xl md:text-5xl mr-20 space-y-5 pb-2 '>
      <div className='text-white space-y-4'>
        <h1>Start a better</h1>
      <h1>shape of you!</h1>
      </div>
      <div className='text-[#FFFF7D]'>
      <h1>Come join Us!</h1>
      </div>
     </div>
      <div className='pt-5'>
 <button
        onClick={() => router.push("/learnmore")}
        className="bg-[#f9fedd] text-[#3a3838] px-5 py-2 font-bold rounded-full cursor-pointer">
      Learn More
      </button>
      </div>

    </div>
  )
}

export default LeftHome
