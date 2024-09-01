import icon1 from "../assets/images/about_24_icon.png"
import icon2 from "../assets/images/about_estimate_icon.png"
import image from "../assets/images/about_section_img-1.jpg"
const LeftCard = () => {
  const Card = ({icon, title, subtitle}) => (
    <div data-aos="fade-right" className="flex py-4 gap-4 items-center lg:pe-12">
      <div className="bg-white p-5 rounded-bl-3xl">
        <img src={icon} className="aspect-square" alt="" />
      </div>
      <div className="">
        <h5 className="text-2xl font-bold pb-3">{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div data-aos="fade-up" className="text-xl row text-white">
      <div className="col-12 md:col-11 lg:col-9 p-12 md:py-36 bg-secondary rounded-bl-5xl">
        <div className="w-full md:w-3/4">
          <p className="text-primary uppercase">about us</p>
          <h4 className="font-bold text-4xl py-4">Safely Moving Your Valuable Products</h4>
          <p className="pb-12">Altariq Movers: Expertly ​relocating your ​precious items with ​utmost care ​and safety. Trust ​us for ​a secure move. ​📦🚚 #AltariqMovers ​#MovingSafely</p>
          <div>
            <Card icon={icon1} title="Free Estimate" subtitle="Complimentary Estimates for Stress-Free Moves." />
            <Card icon={icon2} title="24/7 Services" subtitle="Reliable 24/7 Moving ​and Packing ​Services" />
          </div>
        </div>
      </div>
    </div>
  )
}
const AboutUsComponent = () => {
  return (
    <div className="md:relative side-aligned-container ms-auto me-auto md:ms-auto md:me-0 mt-20">
      <LeftCard />
      <div className="row justify-center mt-2 md:-mt-20 lg:mt-0 lg:justify-end items-center lg:absolute top-2/4 lg:-translate-y-2/4 right-0">
        <div className="md:col-9 lg:col-8">
          <img data-aos="zoom-in" src={image} className="rounded-bl-4xl" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUsComponent
