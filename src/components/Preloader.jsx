import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Preloader = () => {

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white z-50">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse drop-shadow-lg">
          <Typewriter words={["NeuroCort"]} loop={1} cursor={false} />
        </h1>
    </div>
  );
};

export default Preloader;
