import image from "../assets/images/contact_us_banner.webp"

import Nav from "../components/Nav"
import Hero2 from "../components/Hero2"
import BelowHero from "../components/BelowHero"
import ContactComponent from "../components/ContactComponent"
import GettingStarted from "../components/GettingStarted"
import News from "../components/News"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import FloatingMenu from "../components/FloatingMenu"

import van from "../assets/images/van-1-1024x658.webp"
import icon1 from "../assets/images/location_img-1.webp"
import icon2 from "../assets/images/phone_img-1.webp"
import icon3 from "../assets/images/message_img-1.webp"

const Address = () => {
  const AddressCard = (props) => (
    <div data-aos="fade-right" className="flex border border-primary rounded-bl-4xl p-4 items-center gap-4 my-8 shadow-md bg-white">
      <img src={props.image} className="" alt="" />
      <div>
        <h4 className="text-3xl font-bold">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )

  return (
    <div className="md:relative my-24">
      <div className="container">
        <div className="row">
          <div className="col-12 md:col-6 lg:col-5">
            <AddressCard image={icon1} title="Location" description="Abu Dhabi, United Arab Emirates" />
            <AddressCard image={icon2} title="Phone" description="+971 56 291 6110" />
            <AddressCard image={icon3} title="Email" description="info@altariqmovers.com" />
          </div>
        </div>
      </div>

      <div className="md:absolute top-0 right-0 -z-10">
        <div className="row justify-end">
          <div className="col-12 md:col-8 lg:col-7">
            <img data-aos="zoom-in" src={van} className="w-full" alt="" />  
          </div>
        </div>
      </div>
    </div>
  )
}
const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="Contact Us" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      <Address />
      <ContactComponent />
      <GettingStarted />
      <News className="!mt-8" />
      <Footer />
      <ScrollToTop />
      <FloatingMenu />
    </div>
  )
}

export default ContactUs
