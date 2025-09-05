import React from "react"
import { Card, CardDescription, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"
import MotionHead from "../motionHead"

const pediatricServices = [
  "Newborn exams",
  "Newborn screening / PKU / bilirubin level",
  "Frenotomy (tongue-tie)",
  "Tympanometry / Audiometry",
  "Synagis",
  "Dermabond and some suture placement/removal",
  "ADD/ADHD evaluation and treatment",
  "Rapid testing for strep, mono, flu, pregnancy",
  "Urinalysis, Hemoccult",
  "BMI",
  "Blood draws (lead, anemia, thyroid, lipid, coags)",
  "Blood type testing",
  "RAST allergy testing",
  "Asthma / allergy and spirometry",
  "Pulsox",
  "Wart removal / Histofreeze",
  "Completion of forms (school, camp, daycare)",
  "Ear piercing",
  "Wellness programs",
  "Obesity / Weight Loss and wellness guidance",
  "Pediatric Choice program for enhanced service & convenience",
]

const parentServices = [
  `Prenatal "What to Expect" seminars`,
  `New parent and "Post-Partum Blues" support groups run by experienced psychologists`,
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-muted/40">
      <div className="max-w-[1600px] mx-auto px-10 md:px-20 xl:px-36">
        {/* Heading */}
        <div className="text-center mb-12">
          <Badge variant={'outline'}
                 className='px-4 py-2 bg-amber-700/20 text-amber-600 border-amber-700/70 '
                 >
                    What We Offer
          </Badge>
          {/* <h2 className="text-5xl ">Our <span className="text-amber-700/60 font-thin">Services</span></h2>
          <p className=" mt-3 text-md md:text-xl max-w-2xl mx-auto font-thin">
            Big Apple Pediatrics offers a wide range of pediatric and parent
            support services to ensure your family’s health and well-being.
          </p> */}
          <MotionHead
              head="Our <span class='text-amber-700/60 font-thin'>Services</span>"
              paragraph=" Big Apple Pediatrics offers a wide range of pediatric and parent support services to ensure your family’s health and well-being."
          />
        </div>

        {/* Pediatric Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-thin text-amber-700/80 mb-6">
            Pediatric Services
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pediatricServices.map((service, index) => (
              <Card key={index} className="bg-muted shadow-sm hover:shadow-md shadow-amber-700/20 transition">
                <CardHeader>
                  <CardDescription className="text-center flex items-center justify-center">
                    {
                      service
                    }
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </ul>
        </div>

        {/* Parent Services */}
        <div>
          <h3 className="text-3xl font-thin text-amber-700/80 mb-6">
            For Parents
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {parentServices.map((service, index) => (
              <Card key={index} className="bg-muted shadow-sm hover:shadow-md shadow-amber-700/20 transition">
                <CardHeader>
                  <CardDescription className="text-center flex items-center justify-center">
                    {
                      service
                    }
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
