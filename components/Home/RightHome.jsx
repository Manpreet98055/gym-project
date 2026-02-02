'use client'
import React from 'react'
import Image from 'next/image';
import HomeImage from '@/assets/HomeRight.png';
import { motion } from 'framer-motion';

const RightHome = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotateY: -50 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 1, ease: "easeOut" }
    },
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className='pl-80'
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        animate="animate"
        variants={imageVariants}
      >
        <Image
          src={HomeImage}
          alt="Home Image"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  )
}

export default RightHome