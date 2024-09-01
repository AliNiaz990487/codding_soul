import React from 'react'

const Hero2 = ({title, bgImage}) => {
  return (
    <div className="image-overlay bg-cover bg-center" style={{backgroundImage: `url('${bgImage}')`}}>
        <div className="text-center py-52 md:py-60 text-6xl md:text-8xl font-bold text-white relative z-10">{title}</div>
    </div>
  )
}

export default Hero2
