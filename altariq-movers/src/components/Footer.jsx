import { Link } from "react-router-dom"
import logo from "../assets/images/Altariq-Movers-2-1536x290.png"
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-20 mt-24">
        <div className="container">
          <div className="row items-center  gap-y-8">
            <div data-aos="fade-right" className="col-12 md:col-4 px-3">
              <img src={logo} alt="" />
              <p className="pt-6">Altariq Movers: Committed ​to excellence, ​providing seamless moving ​solutions with ​utmost care and professionalism.</p>
            </div>

            <div data-aos="fade-right" className="col-12 md:col-4 md:px-8">
              <h4 className="font-bold text-xl pb-4">Contact Us</h4>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">United Arab Emirates</Link>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">info@altariqmovers.com</Link>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">+971 56 291 6110</Link>
            </div>

            <div data-aos="fade-right" className="col-12 md:col-4 md:px-8">
              <h4 className="font-bold text-xl pb-4">Links</h4>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">Terms & conditions</Link>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">Privacy policy</Link>
              <Link className="py-1 block hover:text-primary transition-colors" to="/">Support</Link>
            </div>
          </div>
        </div>

      </footer>

      <div className="bg-primary text-white py-3">
        <div className="contianer text-center">
          <div className="flex justify-center gap-3 py-6">
            <Link className="rounded-full bg-white text-primary p-2 border border-primary transition-all hover:text-white hover:border-white hover:bg-transparent hover:-translate-y-2" to="/"><FaFacebook /></Link>
            <Link className="rounded-full bg-white text-primary p-2 border border-primary transition-all hover:text-white hover:border-white hover:bg-transparent hover:-translate-y-2" to="/"><FaTwitter /></Link>
            <Link className="rounded-full bg-white text-primary p-2 border border-primary transition-all hover:text-white hover:border-white hover:bg-transparent hover:-translate-y-2" to="/"><FaGooglePlus /></Link>
            <Link className="rounded-full bg-white text-primary p-2 border border-primary transition-all hover:text-white hover:border-white hover:bg-transparent hover:-translate-y-2" to="/"><FaInstagram /></Link>
          </div>
          <p>Copyright © 2024 All Rights Reserved. Powered By Engr Maaz Ur Rahman Contact:+923479899980</p>
        </div>
      </div>
    </>
  )
}

export default Footer
