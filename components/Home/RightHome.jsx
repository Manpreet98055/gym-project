'use client'
import React from 'react'
import Image from 'next/image';
import HomeImage from '@/assets/HomeRight.png';
const RightHome = () => {
  return (
    <div className='pl-80'>
      <Image
        src={HomeImage}
        alt="Home Image"
        width={500}
        height={500}
      />
    </div>
  )
}

export default RightHome