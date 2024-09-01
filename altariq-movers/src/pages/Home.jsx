import AboutUs from "../components/AboutUsComponent"
import BelowHero from "../components/BelowHero"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import OurWork from "../components/OurWork"
import Services from "../components/OurServices"
import Contact from "../components/ContactComponent"
import OurProjects from "../components/OurProjects"
import HowItWorks from "../components/HowItWorks"
import HappyCustomers from "../components/HappyCustomers"
import OurTeam from "../components/OurTeam"
import GettingStarted from "../components/GettingStarted"
import FAQ from "../components/FAQComponent"
import News from "../components/News"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import FloatingMenu from "../components/FloatingMenu"
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <BelowHero />
      <OurWork />
      <AboutUs />
      <Services />
      <Contact />
      <OurProjects />
      <HowItWorks />
      <HappyCustomers />
      <OurTeam />
      <GettingStarted />
      <FAQ />
      <News />
      <Footer />
      {/* <div className="h-96"></div> */}
      <ScrollToTop />
      <FloatingMenu />
    </div>
  )
}

export default Home
