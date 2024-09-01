import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from "react-icons/fa"
import image1 from "../assets/images/team_img_1.jpg"
import image2 from "../assets/images/team_img_4.jpg"
import image3 from "../assets/images/team_img_6.jpg"
import { Link } from "react-router-dom"

const data = [
  {
    image: image1,
    name: "David Watson",
    position: "Senior Developer",
  },
  {
    image: image2,
    name: "James Bond",
    position: "Project Manager",
  },
  {
    image: image3,
    name: "Hanrry Alax",
    position: "Team Lead",
  }
]

const TeamCard = (props) => {
  const SocialIcon = ({ icon, link }) => (
    <Link className="border border-primary text-primary rounded-full p-2 cursor-pointer transition-all | hover:-translate-y-2 hover:bg-primary hover:text-white" to={link}>{icon}</Link>
  )

  return (
    <div data-aos="fade-right" className="flex flex-col items-center border border-primary rounded-bl-4xl">
      <div className="overflow-hidden group w-full">
        <img className="transform transition-transform duration-300 group-hover:scale-110 w-full" src={props.image} alt="" />
      </div>
      <h4 className="py-4 font-bold text-xl">{props.name}</h4>
      <p className="text-gray-900">{props.position}</p>
      <div className="py-8 flex gap-3 flex-wrap">
        <SocialIcon icon={<FaFacebook />} link="/" />
        <SocialIcon icon={<FaTwitter />} link="/" />
        <SocialIcon icon={<FaGooglePlus />} link="/" />
        <SocialIcon icon={<FaInstagram />} link="/" />
      </div>
    </div>
  )
}


const OurTeam = () => {
  return (
    <div className="container -mt-24 md:mt-20">
      <div data-aos="fade-up" className="text-center">
        <p className="uppercase text-secondary text-xl">our work</p>
        <p className="capitalize py-6 pb-12 text-3xl font-bold">we create an honest, hassle-free, and quality moving experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default OurTeam
