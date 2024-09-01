import Slider from "react-slick"
import image from "..//assets/images/home_banner_02.jpg"
import PrimaryButton from "./PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sceneData = [
  {
    topText: "Welcome to Al Tariq Movers",
    mainText: "fast and reliable moving solutions",
    descriptionText: "Altariq Movers: Your ​go-to choice ​for fast and ​reliable moving ​solutions. Trust us ​to make ​your move seamless and stress-free.",
  },
  {
    topText: "need to move?",
    mainText: "making your move fast and organized",
    descriptionText: "Altariq Movers: Streamlining ​your move ​with speed and ​precision, ensuring ​a fast and ​organized relocation ​experience tailored to your needs.",
  },
  {
    topText: "hate the hastle?",
    mainText: "fast and secure moving company",
    descriptionText: "Altariq Movers: Your ​trusted partner ​for fast and ​secure moving ​solutions. Swift, reliable, ​and dedicated ​to making your move stress-free.",
  }
]


function Scene({ topText, mainText, descriptionText, index }) {
  return (
    <div className="row">
      <div className="small-container">
        <h1 className={`hero-animate${index} text-xl md:text-3xl`}>{topText}</h1>
        <h2 style={{animationDelay: ".5s"}} className={`hero-animate${index} text-3xl md:text-6xl capitalize`}>{mainText}</h2>
        <p style={{animationDelay: ".8s"}} className={`hero-animate${index} font-normal py-3 pb-10 md:pb-16`}>{descriptionText}</p>
        <PrimaryButton data-aos="fade-down" data-aos-once="false" link="" className="">Get Started</PrimaryButton>
        <div className="pb-12"></div>
      </div>
    </div>
  );
}

function Fade() {

  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="custom-dot w-5 h-1 bg-white"></div>
    ),
    appendDots: dots => (
      <div style={{ padding: "10px" }}>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    afterChange: (c) => {
      const slide = document.querySelectorAll(`.hero-animate${c}`)
      slide[0].classList.toggle("animate__animated")
      slide[0].classList.toggle("animate__fadeInDown")
      
      slide[1].classList.toggle("animate__animated")
      slide[1].classList.toggle("animate__fadeInDown")
      
      slide[2].classList.toggle("animate__animated")
      slide[2].classList.toggle("animate__fadeInDown")
    },
    beforeChange: (c, n) => {
      const slide = document.querySelectorAll(`.hero-animate${c}`)
      slide[0].classList.remove("animate__animated")
      slide[0].classList.remove("animate__fadeInDown")

      slide[1].classList.remove("animate__animated")
      slide[1].classList.remove("animate__fadeInDown")
      
      slide[2].classList.remove("animate__animated")
      slide[2].classList.remove("animate__fadeInDown")
    }
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          sceneData.map((scene, index) => (
            <Scene {...scene} index={index} key={index}  />
          ))
        }
      </Slider>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="my-hero bg-cover"
      style={{ backgroundImage: `url('${image}')` }}>
      <div className="container"><Fade /></div>
    </div>
  )
}

export default Hero
