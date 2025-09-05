'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../public/infinity.json'

function LottiePlayer() {
  return (
    <Lottie
      animationData={animationData}  // use animationData prop
      loop
      autoplay
      className=' md:w-[60%] md:h-[60%] text-shadow-amber-100'
    />
  )
}

export default LottiePlayer