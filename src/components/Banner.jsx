import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit";

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
          <Slide image={image1} text="Neural Intelligence & Cortical Processing with AI Inspired by the Human Brain . . ." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={image2} text="Where Artificial Intelligence meets Human Ingenuity to drive unparalleled Digital Transformation . . ." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={image3} text="Revolutionizing Industries with AI, Machine Learning, and Next-Gen IT Architecture . . ." />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const Slide = ({ image, text }) => {
  const typeRef = useRef(null);
  const typeItInstance = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeRef.current) {
      typeRef.current.innerHTML = "";

      if (typeItInstance.current) {
        typeItInstance.current.destroy();
      }

      typeItInstance.current = new TypeIt(typeRef.current, {
        strings: [text],
        speed: 20,
        startDelay: 0,
        lifeLike: true,
        cursor: true,
        loop: true,
        afterComplete: () => {
        },
      }).go();
    }

    return () => {
      if (typeItInstance.current) {
        typeItInstance.current.destroy();
      }
    };
  }, [mounted, text]);

  return (
    <div className="relative w-full h-[400px] xs:h-[500px] md:h-[600px] lg:h-[700px]">
      <img
        src={image}
        alt="Banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-5 mx-4 sm:mx-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg">
        <h1 className="text-white text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[28px]">
          <span ref={typeRef}></span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;