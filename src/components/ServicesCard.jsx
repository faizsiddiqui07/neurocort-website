import React from "react";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";
import scrollTop from "../helpers/scrollTop";

const ServicesCard = ({ title, description, link, image }) => {
  return (
    <Link
      to={`/service/${link}`}
      className="relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-end rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl"
      data-aos="zoom-in"
      onClick={scrollTop}
    >
      {/* Background Image with Pseudo-Element */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Gradient Overlay (Make It Lighter for Visibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Content Box */}
      <div className="relative z-10 p-4 sm:p-6 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white rounded-b-2xl">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold capitalize tracking-wide">
          {title}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-80">
          {convert(description || "").slice(0, 90)}...
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-[#a0810e] hover:bg-[#8b6d0c] transition-all duration-300 rounded-full">
          Learn More
        </button>
      </div>
    </Link>
  );
};

export default ServicesCard;
