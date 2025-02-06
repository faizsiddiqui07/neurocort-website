import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import test1 from '../assets/images/firstBanner.webp';
import test2 from '../assets/images/secondBanner.webp';
import test3 from '../assets/images/thirdBanner.webp';
import test4 from '../assets/images/services.webp';
import test5 from '../assets/images/homeContact.webp';
import test6 from '../assets/images/firstBanner.webp';
import test7 from '../assets/images/secondBanner.webp';
import test8 from '../assets/images/contactImage.webp';
import test9 from '../assets/images/homeContact.webp';
import test10 from '../assets/images/services.webp';
import test11 from '../assets/images/firstBanner.webp';
import test12 from '../assets/images/thirdBanner.webp';

const BookSlider = () => {
  const images = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12];
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1); // Start page from 1

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      {/* Book Component */}
      <HTMLFlipBook
        width={400}
        height={500}
        className="shadow-2xl"
        ref={flipBookRef}
        onFlip={(e) => handlePageChange(e.data)}
      >
        {images.map((img, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img src={img} alt={`Page ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Page Number Display */}
      <div className="text-white mt-4">
        <span>Page {currentPage} of {images.length}</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipNext()}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default BookSlider;
