import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import "./assets/css/global.css"
import Loader from "./components/Loader"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css'
const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const ContactUs = lazy(() => import("./pages/ContactUs"))
const EngineUpdates = lazy(() => import("./pages/EngineUpdates"))
const FAQ = lazy(() => import("./pages/FAQ"))

const App = () => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  // AOS.init()
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/engine-updates" element={<EngineUpdates />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
