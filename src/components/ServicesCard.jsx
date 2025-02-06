import React from "react";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";
import scrollTop from "../helpers/scrollTop";

const ServicesCard = ({ icon, title, description, link, image }) => {
  
  return (
    <Link
      to={`/service/${link}`}
      className="w-full h-[250px] flex flex-col justify-center rounded-lg shadow-lg overflow-hidden bg-cover bg-center relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      data-aos="zoom-in"
      style={{ backgroundImage: `url(${image})`, objectFit:'cover', }}
      onClick={scrollTop}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better readability */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-2xl font-bold text-white capitalize hover:text-[#a0810e] transition-colors duration-300">
            {title}
          </h2>
          <p className="text-lg text-white leading-relaxed">
            {convert(description).slice(0, 100)}...
          </p>
          <Link
            to={`/service/${link}`}
            className="text-base text-[#a0810e] font-medium hover:text-[#8b6d0c] transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ServicesCard;
