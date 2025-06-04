import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/images/firstBanner.webp";
import image2 from "../assets/images/secondBanner.webp";
import image3 from "../assets/images/thirdBanner.webp";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full">
      <Swiper
        grabCursor
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <Slide image={image1} text="Neural Intelligence & Cortical Processing with AI Inspired by the Human Brain..." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={image2} text="Where Artificial Intelligence meets Human Ingenuity to drive unparalleled Digital Transformation..." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={image3} text="Revolutionizing Industries with AI, Machine Learning, and Next-Gen IT Architecture..." />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const Slide = ({ image, text }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <img
        src={image}
        alt="Banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {text && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 sm:px-8 w-full max-w-full">
          <div className="bg-black/70 backdrop-blur-sm px-6 py-4 rounded-lg shadow-md">
            <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              {text}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
