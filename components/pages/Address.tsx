import React from 'react'
import MotionHead from '../motionHead'

export default function Address() {
  return (
   <section id="address" className="py-16 bg-muted/50 ">
        <div className='max-w-[1600px] mx-auto px-10 md:px-20 xl:px-35 '>
            <div className='flex flex-col  md:flex-row items-center  justify-around'>
               
                <div className='max-w-[400px]  flex flex-col  '>
                <MotionHead
                    head=" <span class='text-amber-700/60'>Office</span> Hours"
                    paragraph="Please call our office to schedule an appointment. My staff is eager to assist you in any way."
                    />
                    
                <ul className="text-md space-y-1 text-start ">
                    <li>Monday: 8:30am - 7:00pm</li>
                    <li>Tuesday: 9:30am - 5:00pm</li>
                    <li>Wednesday: 8:30am - 5:00pm</li>
                    <li>Thursday: 9:30am - 1:00pm</li>
                    <li>Friday: 10:00am - 3:00pm</li>
                    <li>Saturday: 10:00am - 1:00pm (varies)</li>
                    <li>Sunday: Closed</li>
                </ul>
                
            </div>
                <div className='max-w-[400px] '>
                    <MotionHead
                    head="Our <span class='text-amber-700/60'>Address</span>"
                    paragraph="315 West 70th Street, Suite 1K <br/> ​New York, NY 10023 Reserve Your Spot"
                    />
                    <div className='flex flex-col items-center'>
                        <h5>Phone:  (212) 595-5501</h5>
                        <h5>Fax : (212) 595-5510</h5>
                        <h5>Email: wardpeds[AT]gmail.com</h5>
                    </div>
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-md mt-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.871916602627!2d-73.97237!3d40.785091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25896c01b6a6f%3A0x2f1df41c3d10d13f!2sUpper%20West%20Side%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </div>
   </section>
  )
}

