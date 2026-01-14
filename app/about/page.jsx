'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#1A1363] font-semibold mb-6 hover:underline"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-[#1A1363] mb-6">
        About Stamina Gym
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <span className="font-semibold">Stamina Gym Fitness Center</span>, 
        where strength meets discipline and fitness becomes a lifestyle.
        We are dedicated to helping individuals transform their bodies, 
        build confidence, and live healthier lives.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are a beginner or a professional athlete, our gym offers 
        the right environment, expert guidance, and modern equipment to help you 
        achieve your fitness goals safely and effectively.
      </p>

      {/* MISSION */}
      <h2 className="text-2xl font-bold text-[#1A1363] mb-3">
        Our Mission
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Our mission is to promote a healthy lifestyle by providing 
        professional training, personalized workout plans, and continuous 
        motivation in a supportive and friendly environment.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-bold text-[#1A1363] mb-3">
        Why Choose Us?
      </h2>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Certified and experienced personal trainers</li>
        <li>Modern gym equipment and clean facilities</li>
        <li>Customized workout and nutrition guidance</li>
        <li>Flexible membership plans</li>
        <li>Friendly, motivating, and safe environment</li>
      </ul>

      {/* FOOTER TEXT */}
      <div className="mt-8 p-5 bg-[#F4F3F8] rounded-xl">
        <p className="text-gray-700 font-medium">
          Join Stamina Gym today and take the first step towards a 
          stronger, healthier, and more confident you 💪
        </p>
      </div>

    </div>
  )
}

export default About;