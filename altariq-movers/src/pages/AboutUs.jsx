import image from "../assets/images/about_banner.webp"
import Nav from '../components/Nav'
import Hero2 from "../components/Hero2"
import BelowHero from "../components/BelowHero"
import AboutUsComponent from "../components/AboutUsComponent"
import HowItWorks from "../components/HowItWorks"
import OurWork from "../components/OurWork"
import ContactComponent from "../components/ContactComponent"
import OurTeam from "../components/OurTeam"
import News from "../components/News"
import Footer from "../components/Footer"

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="About Us" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      <AboutUsComponent />
      <HowItWorks />
      {/* component */}
      <OurWork />
      <ContactComponent />
      {/* component */}
      <OurTeam />
      <News />
      <Footer />
    </div>
  )
}

export default AboutUs
