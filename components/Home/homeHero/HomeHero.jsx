'use client'
import React from 'react'
import HomeHerocenter from './HomeHerocenter'
const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-white bg-[#251D74]">

      <div style={{ fontFamily: "Poppins, sans-serif" }} className="text-2xl font-semibold pt-10">
        About
      </div>

      <div
        className="font-semibold text-3xl md:text-5xl pl-2 tracking-wider"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        STAMINA GYM FOR MAN & WOMEN
      </div>
      <div>
        <HomeHerocenter />
      </div>

    </div>
  )
}

export default HomeHero
