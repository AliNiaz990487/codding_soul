import BgImage from "../assets/images/project_banner_bg.jpg"
import Image from "../assets/images/project_img_08.jpg"
import PrimaryButton from "./PrimaryButton"
const OurProjects = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat image-overlay mt-12 md:mt-0" style={{ backgroundImage: `url('${BgImage}')` }}>
        <div className="side-aligned-container mx-auto md:ms-auto md:me-0">

          <div className="row relative z-10">
            <div data-aos="fade-up" className="col-12 md:col-6 text-white py-32 md:pe-32">
              <h4 className="uppercase font-semibold text-xl" >our projects</h4>
              <h3 className="text-5xl font-bold py-7">You Move On, While We Move Out!</h3>
              <p className="pb-20">Altariq Movers: You Move On, While We Move Out! | Expert Packing & Moving Services</p>
              <PrimaryButton>Click Here</PrimaryButton>
            </div>
            <div className="hidden md:block md:col-6">
              <img data-aos="zoom-in" src={Image} className="absolute top-48 right-12 rounded-bl-5xl" alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className="container flex justify-center -mt-12 relative z-10">
        <img src={Image} className="block md:hidden rounded-bl-5xl" alt="" />
      </div>
    </>
  )
}

export default OurProjects
