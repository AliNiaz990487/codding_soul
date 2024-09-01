import React from 'react'

const News = ({className}) => {
  return (
    <div className={`container mt-[38rem] md:mt-36 ${className}`}>
      <div data-aos="fade-up" className="text-center">
        <p className="uppercase text-secondary text-xl">latest news</p>
        <p className="capitalize py-6 pb-12 text-3xl font-bold">Want To Learn More About your Moving Budget</p>
      </div>

      <div className="row bg-secondary px-4 py-12 rounded-bl-4xl">
        <div data-aos="fade-right" className="col-12 md:col-4 text-white">
          <p className="uppercase text-xl py-4">need more consultation</p>
          <p className="font-bold text-4xl">Subscribe To Our Newsletter</p>
        </div>
      </div>
    </div>
  )
}

export default News
