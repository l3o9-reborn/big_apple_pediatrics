'use client'
import React from "react"
import Image from "next/image"
import { CardStackDemo } from "../cardStack"
import MotionHead from "../motionHead"
import ElectricWire from "../ElectricWire"


export default function AboutDrWard() {
  return (
    <section id="about" className="py-16 md:px-10 bg-muted/30 relative">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-25">
        <MotionHead
          head="Meet <span class='text-amber-700/60 font-light'>Dr. Cathy Ward</span>"
          paragraph=""
        />
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LottiePlayer/>
        </div> */}
      <ElectricWire/>

        <div className="flex items-center justify-between flex-col md:flex-row gap-2 mt-15 z-5">
          <div className='h-66 w-66 md:h-72 md:w-72 lg:h-96 lg:w-96 flex items-center justify-center '>
            <Image src="/drward.jpg" alt="Dr Ward Image" width={1080} height={1080} className='h-66 w-66 md:h-96 md:w-96 rounded-lg ring-2 ring-amber-600 shadow-2xl shadow-amber-700/50 z-5'/>
           </div>
                    {/* Top Left Card */}
          <CardStackDemo/>
            
        </div>
      
      </div>
    </section>
  )
}
