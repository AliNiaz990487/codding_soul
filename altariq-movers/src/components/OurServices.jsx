import { Link } from 'react-router-dom'
import CardImage1 from "../assets/images/service_card_01-1.jpg"
import CardImage2 from "../assets/images/service_card_02-1.jpg"
import CardImage3 from "../assets/images/service_card_03-2.jpg"
import CardImage4 from "../assets/images/service_card_04-2.jpg"
import CardImage5 from "../assets/images/service_card_05-1.jpg"
import CardImage6 from "../assets/images/service_card_06-1.jpg"

import CardIcon1 from "../assets/images/service_img1.png"
import CardIcon2 from "../assets/images/service_img2.png"
import CardIcon3 from "../assets/images/service_img3.png"
import CardIcon4 from "../assets/images/service_img4.png"
import CardIcon5 from "../assets/images/service_img5.png"
import CardIcon6 from "../assets/images/service_img6.png"
import { FaArrowRight } from 'react-icons/fa'

const data = [
  {
    image: CardImage1,
    heading: "Residential packaging",
    peragraph: "Efficient Home Moves: ​Altariq Movers ​- Your Expert ​in Residential ​Packing",
    icon: CardIcon1
  },
  {
    image: CardImage2,
    heading: "Commercial movers",
    peragraph: "Altariq Movers: Expert Commercial Movers for Seamless Relocations.",
    icon: CardIcon2
  },
  {
    image: CardImage3,
    heading: "Furniture rebinding",
    peragraph: "Altariq Movers: Expert ​Furniture Rebinding ​Services for a Smooth Move!",
    icon: CardIcon3
  },
  {
    image: CardImage4,
    heading: "Furniture recycling",
    peragraph: "Altariq Movers: Furniture ​Recycling Services ​- Eco-Friendly Solutions ​for a ​Greener Move!",
    icon: CardIcon4
  },
  {
    image: CardImage5,
    heading: "Residential movers",
    peragraph: "Altariq Movers: Expert Residential Moving Services.",
    icon: CardIcon5
  },
  {
    image: CardImage6,
    heading: "Commercial storage",
    peragraph: "Altariq Movers: Premier ​Commercial Storage ​Solutions",
    icon: CardIcon6
  }
]


const ServiceCard = (props) => (
  <div data-aos="fade-right" className="border border-primary rounded-bl-3xl group">
    <div className="overflow-hidden">
      <img className="transform transition-transform duration-300 group-hover:scale-110 w-full" src={props.image} alt="" />
    </div>
    <div className="p-5">
      <h4 className="py-4 font-bold text-xl">{props.heading}</h4>
      <p>{props.peragraph}</p>
      <div className="pt-20 flex justify-between items-center">
        <img src={props.icon} alt="" />
        <Link to="/" className="bg-primary p-4 rounded-bl-2xl text-white border border-primary hover:bg-transparent hover:text-black transition-colors"><FaArrowRight /></Link>
      </div>
    </div>
  </div>
);


const OurServices = () => {
  return (
    <>
      <div data-aos="fade-up" className="small-container text-center py-8 pt-24">
        <p className="uppercase text-secondary text-xl">our services</p>
        <p className="capitalize py-6 pb-12 text-3xl font-bold">we provide world class logistic services</p>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ServiceCard {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default OurServices
