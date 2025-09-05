import React from 'react'
import MotionHead from '../motionHead'
import Image from 'next/image'

function Insurances() {
  return (
   <section id="insurances" className=' py-10 bg-muted/40'>
     <div className='max-w-[1600px] mx-auto px-10 md:px-20 lg:px-35'>
        <MotionHead
        head="<span class='text-amber-700/60'>Insurances</span>"
        paragraph="Please call for an updated list as changes may occur with individual insurance companies"
        />
        <Image
         src="/insurances.png"
         alt='insurances image'
         width={1024}
         height={1024}
         className='w-full'
        />
    </div>
   </section>
  )
}

export default Insurances