// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/404.webp'

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className='flex flex-col justify-center items-center'>
        <div className="">
        <img src={notFoundImage} className='w-full' alt="" />
        </div>
        <Link
          to="/"
          className="mt-6 text-3xl text-white hover:text-gray-400 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
