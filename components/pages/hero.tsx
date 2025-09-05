import React from 'react'
import Image from 'next/image'
import {Phone} from 'lucide-react'
import { Spotlight } from '../common/spotlight-new'
import { Badge } from '../ui/badge'
function Hero() {
  return (
    <div className=' min-h-[600px] flex items-center'>
        
        <div className='max-w-[1600px] m-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-10 xl:px-25  py-10 '>
            <Spotlight/>
            <div className='text-center md:text-start  md:max-w-[400px] lg:max-w-[550px] xl:max-w-[700px] flex flex-col items-center md:items-start gap-7 '>
                <Badge variant={'outline'}
                 className='px-4 py-2 bg-amber-700/20 text-amber-600 border-amber-700/70 '
                 >
                    Big Care for Little Patients
                </Badge>
                <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground/80">
                    Caring for <span className="text-amber-700/90">Your Little Ones</span>, <br />
                    Every Step of the Way
                </h1>

                <p className='text-sm md:text-md lg:text-lg text-muted-foreground'>Welcome to Big Apple Pediatrics, where our guiding philosophy is to provide quality, compassionate, and thorough medical care through education, prevention, and wellness.</p>
                <div>
                    <button className='bg-amber-700 text-gray-100 px-6 py-3 rounded-lg hover:bg-amber-700/90  transition duration-300 flex items-center gap-2 border-amber-900 '>
                        <Phone/>
                        <span>Call For Appointment</span>
                    </button>
                </div>
            </div>
            <div className='h-66 w-66 md:h-72 md:w-72 lg:h-96 lg:w-96 flex items-center justify-center '>
                <Image src="/logo_bap.jpg" alt="Hero Image" width={1080} height={1080} className='h-66 w-66 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full ring-2 ring-amber-600 shadow-2xl shadow-amber-700/50'/>
            </div>
        </div>
    </div>

  )
}

export default Hero