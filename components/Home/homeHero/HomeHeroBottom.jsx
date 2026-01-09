'use client'
import React from "react";
import { FaCrown, FaChessPawn } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";

const HomeHeroBottom = () => {
  return (
    <section className="bg-[#EDECEC] py-10 md:py-16 px-4 md:px-10 overflow-hidden">

      {/* TOP TEXT */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">

        <h2 className="text-3xl md:text-6xl font-bold tracking-wide text-[#1B1B4B]">
          Our Plan:
        </h2>

        <h2 className="text-3xl md:text-6xl font-bold tracking-[2px] md:tracking-[4px] text-[#0C0C28] text-center md:text-left">
          JOIN OUR MEMBERSHIP
        </h2>
      </div>

      {/* BACKGROUND SLANTED (HIDE ON MOBILE) */}
      <div className="relative mt-6">

        <div className="hidden md:block absolute -left-1 top-0 w-[15%] h-80 bg-[#1F1A63] -skew-x-12 rounded-r-3xl"></div>
        <div className="hidden md:block absolute -left-20 top-10 w-[35%] h-40 bg-[#3F2EAD] -skew-x-12 rounded-r-3xl opacity-90"></div>

        {/* CARDS */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:flex
          gap-6 md:gap-10 lg:gap-16
          pt-10 md:pt-16
          justify-items-center lg:justify-start">

          {/* CARD 1 */}
          <div className="bg-white p-2 rounded-3xl shadow-xl">
            <div className="bg-white rounded-3xl border-4 border-[#0A0A5A]
              p-4 md:p-6 w-32 h-44 md:w-40 md:h-50
              flex flex-col justify-center items-center">
              <FaChessPawn className="text-5xl md:text-8xl text-[#0A0A5A] mb-2" />
              <p className="font-bold text-[#0A0A5A] text-xs md:text-sm text-center">
                Annual<br />Membership
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#2B2B3C] text-white rounded-3xl shadow-xl
            p-4 md:p-6 w-32 h-44 md:w-40 md:h-50
            flex flex-col justify-center items-center md:mt-5">
            <p className="text-3xl md:text-4xl font-extrabold">7</p>
            <p className="text-sm md:text-lg font-bold">Days</p>
            <p className="text-[10px] md:text-xs mt-2 opacity-80 tracking-wide">
              Weekly Rate
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#9D9AD4] text-white rounded-3xl shadow-xl
            p-4 md:p-6 w-32 h-44 md:w-40 md:h-50
            flex flex-col justify-center items-center">
            <p className="text-3xl md:text-4xl font-extrabold">1</p>
            <MdOutlineFreeCancellation className="text-lg md:text-xl -mt-1" />
            <p className="text-sm md:text-lg font-bold">Month</p>
            <p className="text-[10px] md:text-xs mt-1 opacity-80">
              Monthly Rate
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#4B4C8F] text-white rounded-3xl shadow-xl
            p-4 md:p-6 w-32 h-44 md:w-40 md:h-50
            flex flex-col justify-center items-center md:mt-5">
            <p className="text-3xl md:text-4xl font-extrabold">6</p>
            <MdOutlineFreeCancellation className="text-lg md:text-xl -mt-1" />
            <p className="text-sm md:text-lg font-bold">Months</p>
            <p className="text-[10px] md:text-xs mt-1 opacity-80">
              Biannual Rate
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-[#111464] text-white rounded-3xl shadow-xl
            p-4 md:p-6 w-32 h-44 md:w-40 md:h-50
            flex flex-col justify-center items-center">
            <p className="text-3xl md:text-4xl font-extrabold">1</p>
            <FaCrown className="text-lg md:text-xl mt-1" />
            <p className="text-sm md:text-lg font-bold">Year</p>
            <p className="text-[10px] md:text-xs mt-1 opacity-80">
              Annual Rate
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHeroBottom;
