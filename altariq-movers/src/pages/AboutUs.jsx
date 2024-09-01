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

import womanImage from "../assets/images/testimonial_exp_img-1.jpg"
import icon1 from "../assets/images/our_vision_img.webp"
import icon2 from "../assets/images/about_us_mission.webp"
import van from "../assets/images/van-1-1024x658.webp"

import serviceCard1 from "../assets/images/service_card_03-2.jpg"
import serviceCard2 from "../assets/images/service_card_04-2.jpg"
import PrimaryButton from "../components/PrimaryButton"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutProduct = () => {
  const Card = props => (
    <div className="flex border border-primary rounded-bl-4xl p-6 gap-4 flex-wrap my-8">
      <img src={props.image} alt="" />
      <div>
        <h5 className="font-bold text-xl">{props.heading}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )

  return (
    <div className="container py-20">
      <div className="row items-center">
        <div data-aos="fade-up" className="col-12 md:col-6">
          <h4 className="text-primary uppercase text-xl pb-4">about us</h4>
          <p className="font-bold text-4xl pb-5">Altariq Movers: Move Your Product Across All Borders</p>
          <p>Altariq Movers ensures seamless relocation, offering expert packing, safe transport, and efficient moving services. Trust us for a stress-free move!</p>
          <Card image={icon1} heading="Vision" description="Leading the future in global, efficient, and client-centric moving solutions." />
          <Card image={icon2} heading="Mission" description="Empower seamless moves with expert care and global logistics solutions." />
        </div>

        <div className="col-12 md:col-6">
          <img data-aos="zoom-in" src={womanImage} className="w-full" alt="" />
        </div>
      </div>
    </div>
  )
}

const OurProjects = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  const ProjectSlider = () => (
    // <div className="relative w-full">
      <Slider {...settings}>
        <div>
          <img className="w-full rounded-bl-4xl" src={serviceCard1} alt="" />
        </div>
        <div>
          <img className="w-full rounded-bl-4xl" src={serviceCard2} alt="" />
        </div>
      </Slider>
    // </div>
  );

  return (
    <div className="md:relative image-overlay bg-cover bg-center my-32" style={{ backgroundImage: `url('${serviceCard1}')` }}>
      <div className="container">
        <div className="row relative z-10 items-center gap-y-10 pt-20 md:pt-0">
          <div data-aos="fade-up" className="col-12 md:col-6 text-white">
            <h4 className="uppercase text-xl py-3">our projects</h4>
            <p className="font-bold text-3xl md:text-5xl pb-5">You Move On, While We Move Out!</p>
            <p className="pb-6">Seamless transitions with Altariq Movers: You move on, while we expertly handle your move-out process!</p>
            <PrimaryButton>Click Here</PrimaryButton>
          </div>

          <div className="col-12 md:col-6">
            <img data-aos="zoom-in" src={van} className="w-full" alt="" />
          </div>
        </div>
      </div>

      <div className="md:absolute md:w-[28rem] mt-12 md:mt-0 bottom-0 md:translate-y-2/4 right-10 z-10 rounded-bl-4xl overflow-hidden">
        <ProjectSlider />
      </div>
    </div>
  );
};



const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero2 title="About Us" bgImage={image} />
      <BelowHero className="md:-mt-12" />
      <AboutUsComponent />
      <HowItWorks />
      <AboutProduct />
      <OurWork />
      <ContactComponent />
      <OurProjects />
      <OurTeam />
      <News className="!mt-10" />
      <Footer />
    </div>
  )
}

export default AboutUs
