import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Preloader = () => {
  const [showLaunching, setShowLaunching] = useState(true);
  const [showNeuroCort, setShowNeuroCort] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLaunching(false);
      setShowNeuroCort(true);
    }, 1500);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white z-50">
      {showLaunching && (
        <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse drop-shadow-lg">
          Launching
        </h2>
      )}
      {showNeuroCort && (
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse drop-shadow-lg">
          <Typewriter words={["NeuroCort"]} loop={1} cursor={false} />
        </h1>
      )}
    </div>
  );
};

export default Preloader;
