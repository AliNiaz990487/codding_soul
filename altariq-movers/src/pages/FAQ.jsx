import image from "../assets/images/faq_banner_image.webp"

import Nav from '../components/Nav'
import Hero2 from "../components/Hero2"
import BelowHero from "../components/BelowHero"
import OurWork from "../components/OurWork"
import News from "../components/News"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import FloatingMenu from "../components/FloatingMenu"

const FAQ = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="FAQ" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      <OurWork />
      <News className="!mt-8" /> 
      <Footer />
      <ScrollToTop />
      <FloatingMenu />
    </div>
  )
}

export default FAQ
