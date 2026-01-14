'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-[#1A1363] font-semibold hover:underline"
      >
        ← Back
      </button>

      {/* HEADING */}
      <h1 className="text-4xl font-extrabold mb-4 text-[#1A1363]">
        About Stamina Gym
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Stamina Gym Fitness Center is more than just a gym — it’s a place where
        transformation begins. We focus on strength, discipline, and a healthy
        lifestyle for people of all fitness levels.
      </p>

      {/* EXPERIENCE */}
      <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1A1363]">
        Our Experience
      </h2>

      <p className="text-gray-600 mb-4">
        With years of experience in fitness training, body transformation,
        and personal coaching, Stamina Gym has helped hundreds of members
        achieve real, visible results. Our trainers understand that every body
        is different, so we design programs that fit individual goals.
      </p>

      {/* FEATURES */}
      <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1A1363]">
        Gym Features
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Certified & experienced personal trainers</li>
        <li>Modern and well-maintained gym equipment</li>
        <li>Personalized workout & nutrition plans</li>
        <li>Clean, safe & motivating workout environment</li>
        <li>Flexible membership plans</li>
        <li>One-on-one coaching support</li>
      </ul>

      {/* MEMBER RESULTS */}
      <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1A1363]">
        Member Results
      </h2>

      <p className="text-gray-600 mb-4">
        Our members have achieved impressive transformations — from weight loss
        and muscle gain to improved stamina and confidence. Consistency,
        guidance, and dedication are the pillars of success at Stamina Gym.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1A1363]">
        Why Choose Stamina Gym?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Result-oriented training programs</li>
        <li>Friendly & motivating trainers</li>
        <li>Proven transformation success stories</li>
        <li>Supportive fitness community</li>
      </ul>

      {/* CTA */}
      <div className="mt-10 bg-[#1A1363] text-white p-6 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-2">
          Start Your Fitness Journey Today
        </h3>
        <p className="opacity-90">
          Join Stamina Gym and become the strongest version of yourself.
        </p>
      </div>

    </div>
  )
}

export default About
