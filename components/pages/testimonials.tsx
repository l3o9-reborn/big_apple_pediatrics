'use client'
import React from 'react'
import { InfiniteMovingCardsTestimonials } from '../testimonialCards'
import MotionHead from '../motionHead'

function Testimonials() {
  return (
    <div id='testimonials'  className='bg-muted/60 '>
            <div className='max-w-[1600px] mx-auto px-10 md:px-20 xl:px-36'>
                <MotionHead
              head="What Our <span class='text-amber-700/60'>Clients Say</span>"
              paragraph="We love hearing feedback from our clients. <br /> Here's what they have to say:"
                />
            </div>

        <InfiniteMovingCardsTestimonials/>
    </div>

  )
}

export default Testimonials