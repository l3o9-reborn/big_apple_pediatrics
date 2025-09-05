import React from 'react'
import MotionHead from '../motionHead'
import ContactForm from '../contactForm'


export default function ContactUs() {
  return (
   <section id="contactUs" className="py-16 bg-muted/20 ">
        <div className='max-w-[1600px] mx-auto px-10 md:px-20 xl:px-35 '>
             <div className='flex flex-col lg:flex-row gap-5'>
                    <MotionHead
                    head="<span class='text-amber-700/60'>Contact us :)</span>"
                    paragraph="We’d love to hear from you. Send us a quick message using the form below, and we’ll get back to you as soon as possible."
                    />
                
                    <div className='flex flex-col md:flex-row justify-around'>
                        <ContactForm/>
                    </div>
                </div>

            
        </div>
   </section>
  )
}

