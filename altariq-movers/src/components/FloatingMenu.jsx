import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { FiPhone } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 left-5 flex flex-col items-center space-y-3 z-50">


      <a href="" className={`bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 invisible"}`}>
        <FiPhone className="text-white text-xl" />
      </a>
      <a href="" className={`bg-green-400 p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 invisible"}`}>
        <IoLogoWhatsapp className="text-white text-xl" />
      </a>


      <button onClick={toggleMenu} className={`relative p-4 rounded-full shadow-lg transform transition-all duration-300 bg-purple-400 ${isOpen ? 'rotate-[360deg]' : ''}`}>
        <MdMessage className={`absolute text-white text-xl transition-all ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <FaTimes className={`text-white text-xl transition-all ${isOpen ? "opacity-100" : "opacity-0"} `} />
      </button>
    </div>
  );
};

export default FloatingMenu;
