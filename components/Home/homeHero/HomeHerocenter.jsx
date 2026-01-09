'use client'
import React from 'react'
import Image from 'next/image'
import ImageBg from '@/assets/musselboy.png'
import Imgebg2 from '@/assets/Protien.png'

const HomeHerocenter = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-4 md:px-10 py-10">

  
      <div className="w-full lg:w-auto flex justify-center">
        <Image
          src={ImageBg}
          alt="Home"
          className="w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
        />
      </div>

    
      <div className="w-full lg:flex-1 text-center lg:text-left">

        <p className="text-base md:text-lg text-amber-200 pt-4 md:pt-10 font-bold leading-relaxed">
          Stamina Gym Fitness Center provides proper training and conditioning
          for members who want to improve and transform their body with program
          depend on the body composition.
        </p>

        <p
          className="font-semibold pt-6 md:pt-10 text-3xl md:text-5xl tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          What we offer:
        </p>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-[#0A0A5A]">

       
          <div className="bg-white p-2 rounded-3xl">
            <div className="bg-white rounded-3xl border-4 border-[#0A0A5A]
              p-6 w-36 h-36 md:w-40 md:h-40
              flex flex-col justify-center items-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-none">24</h1>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-none -mt-1">/7</h1>
              <p className="text-sm mt-1 font-bold uppercase">Chat</p>
            </div>
          </div>

        
          <div className="bg-white p-2 rounded-3xl">
            <div className="bg-white rounded-3xl border-4 border-[#0A0A5A]
              p-6 w-36 h-36 md:w-40 md:h-40
              flex flex-col justify-center items-center shadow-lg">
              <p className="text-xl md:text-2xl font-extrabold text-center">
                1 on 1
              </p>
              <p className="text-sm md:text-base font-bold">
                Coaching
              </p>
            </div>
          </div>

          <div className="bg-white p-2 rounded-3xl">
            <div className="bg-white rounded-3xl border-4 border-[#0A0A5A]
              p-6 w-36 h-36 md:w-40 md:h-40
              flex flex-col justify-center items-center shadow-lg">

              <div className="w-10 h-10 rounded-full border-4 border-[#0A0A5A]
                flex items-center justify-center mb-2 text-xl">
                ❤️
              </div>

              <p className="text-xs md:text-sm font-bold text-center">
                Nutrition<br />Plan<br />Guide
              </p>
            </div>
          </div>

        </div>
      </div>

    
      <div className="relative w-full lg:w-[420px] h-[260px] md:h-[360px] lg:h-[420px]">
        <Image
          src={Imgebg2}
          alt="Protein"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#251D74] via-blue-700/50 to-transparent rounded-xl"></div>
      </div>

    </section>
  )
}

export default HomeHerocenter
