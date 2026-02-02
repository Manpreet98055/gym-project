'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const LeftHome = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6 }
    },
    hover: { scale: 1.1, backgroundColor: "#f0f0d0" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className='pl-35'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className='font-bold text-3xl md:text-5xl mr-20 space-y-5 pb-2' variants={itemVariants}>
        <motion.div className='text-white space-y-4' variants={itemVariants}>
          <motion.h1 className="overflow-hidden">
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Start a better
            </motion.span>
          </motion.h1>
          <motion.h1 className="overflow-hidden">
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              shape of you!
            </motion.span>
          </motion.h1>
        </motion.div>
        <motion.div className='text-[#FFFF7D]' variants={itemVariants}>
          <motion.h1 className="overflow-hidden">
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              Come join Us!
            </motion.span>
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className='pt-5' variants={buttonVariants}>
        <motion.button
          onClick={() => router.push("/learnmore")}
          className="bg-[#f9fedd] text-[#3a3838] px-5 py-2 font-bold rounded-full cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default LeftHome
