import { Link } from "react-router-dom"
import Logo from "../assets/images/Altariq-Movers-2-1536x290.png"
import Logo2 from "../assets/images/Altariq-Movers-1536x290.png"
import PrimaryButton from "./PrimaryButton"
import { IoCloseOutline } from "react-icons/io5"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const NavLinks = () => {
  const location = useLocation().pathname
  const linkStyle = (path) => `${location===path ? "!text-primary" : ""} hover:text-primary transition-colors hover:!bg-transparent`
  return (
    <>
      <li><Link className={linkStyle("/")} to="/" >Home</Link></li>
      <li><Link className={linkStyle("/services")} to="/services" >Services</Link></li>
      <li><Link className={linkStyle("/about-us")} to="/about-us" >About Us</Link></li>
      <li><Link className={linkStyle("/contact-us")} to="/contact-us" >Contact</Link></li>
      <li><Link className={linkStyle("/engine-updates")} to="/engine-updates" >Engine Updates</Link></li>
      <li><Link className={linkStyle("/faqs")} to="/faqs" >FAQS</Link></li>
    </>
  )
}
const Nav = () => {

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
      return
    }
    setScrolled(false);
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleScroll);
    };
  }, [])

  return (
    <div className={`fixed z-50 left-2/4 -translate-x-2/4 w-full transition-all ${scrolled ? "translate-y-0" : "translate-y-12"}`}>
      {/* // <div className=""> */}
      <div className="container p-0 rounded-bl-5xl ">

        <div className="drawer bg-white rounded-bl-5xl overflow-hidden">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full flex-row-reverse lg:flex-row">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn bg-primary text-primary-content hover:border-primary hover:text-primary hover:bg-transparent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">
                <img className="h-10 w-auto" src={Logo} alt="Logo" />
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal items-center text-xl">
                  {/* Navbar menu content here */}
                  <NavLinks />
                  <PrimaryButton className="text-white ms-6" link="/">Get A Quote</PrimaryButton>
                </ul>
              </div>
            </div>
            {/* Page content here */}
          </div>
          <div className={`drawer-side ${scrolled ? "top-0" : "-top-12"}`}>
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4 text-xl">
              {/* Sidebar content here */}
              <div className="row py-8 px-2">
                <div className="col-7">
                  <img src={Logo2} className="" alt="" />
                </div>
                <div className="col-2"></div>
                <div className="col-2">
                  <button
                    className="text-3xl bg-primary text-primary-content rounded-md px-3 border border-primary hover:bg-transparent hover:text-primary transition-colors"
                    onClick={() => document.querySelector("#my-drawer-3").checked = false}
                  ><IoCloseOutline /></button>
                </div>
              </div>
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Nav
