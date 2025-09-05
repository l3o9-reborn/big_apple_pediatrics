import Hero from "@/components/pages/hero";
import Services from "@/components/pages/services";
import AboutDrWard from "@/components/pages/aboutDrWard";
import Media from "@/components/pages/media";
import Testimonials from "@/components/pages/testimonials";
import ContactUs from "@/components/pages/contactUs";
import Address from "@/components/pages/Address";
import Insurances from "@/components/pages/insurances";

export default function Home() {
  return (
   <div className="bg-background relative ">
    <Hero/>
    <AboutDrWard/>
    <Services/>
    <Media/>
    <Testimonials/>
    <Address/>
    <Insurances/>
    <ContactUs/>
   </div> 
  );
}
