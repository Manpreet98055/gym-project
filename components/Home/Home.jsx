'use client'
import React from 'react'
import LeftHome from '@/components/Home/LeftHome'
import RightHome from '@/components/Home/RightHome'
import HomeHero from '@/components/Home/homeHero/HomeHero'
import ImageBg from '@/assets/Home.png';
import HomeHeroBottom from '@/components/Home/homeHero/HomeHeroBottom'
import Coaches from '@/components/Home/HomeCoaches/Coaches'
import Visitgym from '@/components/Home/visitGym/Visitgym'
import Register from '@/components/Home/reigister/Register'
import bg from "@/assets/bottomgym.jpg";
import HomeBottom from '@/components/Home/Homebottom/HomeBottom'

const Home = () => {
  return (
    <div>
  <header>
    <div
      className="
        flex flex-col md:flex-row 
        w-full items-center justify-center 
        h-[90vh] md:h-screen 
        bg-cover bg-center bg-no-repeat
        px-4 md:px-10
      "
      style={{
        backgroundImage: `
          linear-gradient(to top, rgba(37, 29, 116, 0.55), rgba(0,0,0,0)),
          url(${ImageBg.src})
        `
      }}
    >
      <LeftHome />
      <RightHome />
    </div>
  </header>

  <main>
    <HomeHero />
    <HomeHeroBottom />
    <Coaches />

    <div
      className="py-10 md:py-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Visitgym />
      <Register />
    </div>

    <HomeBottom />
  </main>
</div>

  )
}

export default Home
