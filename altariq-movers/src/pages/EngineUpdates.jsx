import image from "../assets/images/contact_us_banner.webp"

import Nav from "../components/Nav"
import Hero2 from "../components/Hero2"
import BelowHero from "../components/BelowHero"
import HappyCustomers from "../components/HappyCustomers"
import OurTeam from "../components/OurTeam"
import GettingStarted from "../components/GettingStarted"
import FAQ from "../components/FAQComponent"
import News from "../components/News"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import FloatingMenu from "../components/FloatingMenu"

const EngineUpdates = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="Blog" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      <HappyCustomers />
      <OurTeam />
      <GettingStarted />
      <FAQ />
      <News />
      <Footer />
      <ScrollToTop />
      <FloatingMenu />
    </div>
  )
}

export default EngineUpdates
