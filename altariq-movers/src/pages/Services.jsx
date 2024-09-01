import image from "../assets/images/services_banner.webp"

import Nav from '../components/Nav'
import Hero2 from '../components/Hero2'
import BelowHero from "../components/BelowHero"
import OurServices from "../components/OurServices"
import OurWork from "../components/OurWork"
import ContactComponent from "../components/ContactComponent"
import GettingStarted from "../components/GettingStarted"
import FAQ from "../components/FAQComponent"
import News from "../components/News"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="Our Services" bgImage={image}/>
      <BelowHero className="md:-mt-12" />
      <OurServices />
      <OurWork />
      <ContactComponent />
      <GettingStarted />
      <FAQ />
      <News />
      <Footer />
    </div>
  )
}

export default Services
