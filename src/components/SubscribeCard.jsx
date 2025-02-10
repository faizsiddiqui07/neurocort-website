import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { base_url } from "../config/config";

const SubscribeCard = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
  });
  

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", phone: "" };

    // Email validation
    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Phone validation
    if (!data.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(`${base_url}/api/subscribe`, data, {
        withCredentials: true,
      });
      

      const responseData = response.data;
      
      if (responseData.success) {
        toast.success(responseData.message);
        setData({ email: "", phone: "" }); 
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
    } else {
        toast.error("An unexpected error occurred. Please try again.");
    }
    // console.error("Subscription error:", error);
    }
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-white text-[1.2rem]  xl:text-[1.3rem] text-center">
          Stay up to date with the latest Neuro Cort projects and news.
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="email"
              value={data.email}
              name="email"
              placeholder="Enter email..."
              className={`w-full  rounded-lg px-4 py-2 outline-none placeholder:text-slate-600 placeholder:text-md text-slate-700 ${errors.email ? 'border-2 border-red-500' : ''}`}
              onChange={handleOnChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              value={data.phone}
              name="phone"
              placeholder="Enter phone..."
              className={`w-full rounded-lg px-4 py-2 outline-none placeholder:text-slate-600 placeholder:text-md text-slate-700 ${errors.phone ? 'border-2 border-red-500' : ''}`}
              onChange={handleOnChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <button type="submit" className="w-full bg-[#a0810e] rounded-lg py-2 outline-none text-white hover:bg-[#917200] transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
