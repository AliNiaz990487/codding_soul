import image from "../assets/images/contact_us_banner.webp"

import Nav from "../components/Nav"
import Hero2 from "../components/Hero2"
import BelowHero from "../components/BelowHero"
import ContactComponent from "../components/ContactComponent"
import GettingStarted from "../components/GettingStarted"
import News from "../components/News"
import Footer from "../components/Footer"

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="Contact Us" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      {/* component */}
      <ContactComponent />
      <GettingStarted />
      <News className="!mt-8" />
      <Footer />
    </div>
  )
}

export default ContactUs
