import image from "../assets/images/get_str_img-1.png"
import PrimaryButton from './PrimaryButton'

const GettingStarted = () => {
  return (
    <div className="bg-gray-100 mt-24">
      <div className="side-aligned-container ms-auto md:relative py-16 px-2 md:px-0">

        <div className="row md:absolute top-2/4 md:-translate-y-2/4 left-0 w-full">
          <div data-aos="fade-up" className="col-12 md:col-6">
            <h4 className="uppercase text-secondary text-2xl pb-6">getting started</h4>
            <p className="text-4xl font-bold">Ready To Get Moving?</p>
            <p className="text-4xl font-bold pb-10">Get Your Free Quote</p>
            <PrimaryButton link="/contact" className="hover:bg-secondary hover:!text-white text-white">Contact Us</PrimaryButton>
          </div>
        </div>

        <div className="row justify-center md:justify-end pt-12 md:pt-0">
          <div className="md:col-8">
            <img data-aos="fade-left" src={image} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default GettingStarted
