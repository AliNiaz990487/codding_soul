import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { IoArrowForward } from 'react-icons/io5'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const BelowHero = ({className}) => {

  return (
    <div className={`container mt-4 md:-mt-24 md:relative ${className}`}>
      <div className="row gap-y-4">
        <div data-aos="fade-right" className="col-12 md:col-4 p-0 md:pe-5">
          <div className="h-full p-6 bg-primary text-2xl gap-3 md:rounded-bl-4xl font-bold text-white flex items-center justify-between">
            <span>Trake Your Shipment</span>
            <Link to="/" className="transition-colors hover:text-black"><IoArrowForward /></Link>
          </div>
        </div>

        <div data-aos="fade-up" className="col-12 md:col-4 p-6 bg-white shadow-md md:rounded-bl-4xl flex flex-col justify-center gap-y-3">
          <span className="font-bold text-2xl">Email</span>
          <div className="flex justify-between items-center text-xl lg:text-2xl">
            <span className=""><SlEnvolopeLetter /></span>
            <span>info@altariqmovers.com</span>
          </div>
        </div>

        <div data-aos="fade-left" className="col-12 md:col-4 p-6 bg-white shadow-md  flex flex-col justify-center gap-y-3">
          <span className="font-bold text-2xl">Phone</span>
          <div className="flex justify-between items-center text-xl lg:text-2xl">
            <span><BiPhoneCall /></span>
            <span>+971 56 291 6110</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BelowHero
