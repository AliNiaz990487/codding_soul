import { FaArrowRight } from 'react-icons/fa'
import image from "../assets/images/get_quote_man_img-1.png";
import { Link } from "react-router-dom"
const ContactComponent = () => {
  return (
    <>
      <div className="container bg-secondary h-[30rem] rounded-bl-4xl mt-20 md:mt-64 px-5">

        <div className="row md:relative h-full">

          <div className="col-12 md:col-6">

            <div data-aos="fade-right" className="pt-12">
              <h4 className="text-white font-bold text-4xl pb-10">Get A Free Quote</h4>

              <div className="bg-white p-8 shadow-md">
                <h4 className="font-bold text-2xl">Your Details</h4>
                <p className="mt-3">Let us know how to get back to you.</p>

                <div className="h-0.5 bg-gray-300 mt-6 mb-12"></div>

                <form className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 text-xl gap-4 gap-y-10">

                    <label className="font-bold">
                      First Name <span className="inline-block text-error translate-y-0.5">*</span>
                      <input className="w-full border text-sm p-3 focus-within:outline-none placeholder:text-sm" type="text" placeholder="Al Tariq Movers" />
                      <small className="text-xs font-normal text-gray-600">Enter your first name here</small>
                    </label>

                    <label className="font-bold">
                      Last Name <span className="inline-block text-error translate-y-0.5">*</span>
                      <input className="w-full border text-sm p-3 focus-within:outline-none placeholder:text-sm" type="text" placeholder="Packer" />
                      <small className="text-xs font-normal text-gray-600">Enter your last name here</small>
                    </label>

                    <label className="font-bold">
                      Email Address <span className="inline-block text-error translate-y-0.5">*</span>
                      <input className="w-full border text-sm p-3 focus-within:outline-none placeholder:text-sm" type="email" placeholder="Add email" />
                      <small className="text-xs font-normal text-gray-600">Example user@website.com</small>
                    </label>

                    <label className="font-bold">
                      Subject <span className="inline-block text-error translate-y-0.5">*</span>
                      <input className="w-full border text-sm p-3 focus-within:outline-none placeholder:text-sm" type="text" placeholder="" />
                      <small className="text-xs font-normal text-gray-600">How can we help you?</small>
                    </label>
                  </div>

                  <div className="text-center pt-8">
                    <input className="text-white bg-blue-400 p-3 rounded-md" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-6">
            <img data-aos="zoom-in" src={image} alt="" className="md:h-[35rem] lg:h-[40rem] md:absolute bottom-0 object-contain" />
          </div>
        </div>
      </div>

      <div className="container md:relative mt-[32rem] md:mt-0">
        <div className="row justify-end">
          <div className="col-12 md:col-6 md:p-12">
            <div data-aos="fade-up" className="bg-primary p-10 flex justify-between items-center text-3xl text-white font-bold">
              <h4 className="">How can we help you</h4>
              <Link className="transition-colors hover:bg-white hover:text-black p-3 rounded-bl-2xl" to="/"><FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
