import image from "../assets/images/our_process_img.png"

import icon1 from "../assets/images/our_pro_image_03.png"
import icon2 from "../assets/images/our_pro_image_02.png"
import icon3 from "../assets/images/our_pro_image_01.png"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
const data = [
  {
    image: icon1,
    title: "Contact Office",
    description: "Relocate stress-free with ​Altariq Movers. ​Contact our office ​for seamless ​moving and packing services."
  },
  {
    image: icon2, 
    title: "Packing day",
    description: "Efficient Packing Solutions ​for a ​Stress-Free Moving Day ​- Altariq ​Movers"
  },
  {
    image: icon3,
    title: "Moving day",
    description: "Seamless Moves with ​Altariq Movers: ​Moving Day Experts"
  }
]

const WorkCard = (props) => (
  <div data-aos="fade-right" className="border border-primary rounded-bl-4xl p-6 md:p-8">
    <h4 className="font-bold text-3xl py-4">{props.title}</h4>
    <p>{props.description}</p>
    <div className="flex justify-between items-center pt-12">
      <img src={props.image} alt="" />
      <Link className="bg-primary text-white rounded-bl-2xl p-4 border border-primary hover:text-black hover:bg-transparent transition-colors cursor-pointer" to="/"><FaArrowRight /></Link>
    </div>
  </div>
)

const HowItWorks = () => {
  return (
    <div data-aos="fade-up" className="container mt-32">
      <div className="small-container text-center py-8 pt-24">
        <p className="uppercase text-secondary text-xl">Our process</p>
        <p className="capitalize py-6 pb-12 text-3xl font-bold">How it works?</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="hidden md:block " src={image} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((item, i) => (
            <WorkCard {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
