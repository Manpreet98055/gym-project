'use client'
import React from 'react'
import HomeHerocenter from './HomeHerocenter'
import { motion } from 'framer-motion'

const HomeHero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 text-white bg-[#251D74]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="text-2xl font-semibold pt-10"
        variants={titleVariants}
      >
        About
      </motion.div>

      <motion.div
        className="font-semibold text-3xl md:text-5xl pl-2 tracking-wider"
        style={{ fontFamily: "Poppins, sans-serif" }}
        variants={titleVariants}
      >
        STAMINA GYM FOR MAN & WOMEN
      </motion.div>
      <motion.div variants={titleVariants}>
        <HomeHerocenter />
      </motion.div>

    </motion.div>
  )
}

export default HomeHero
