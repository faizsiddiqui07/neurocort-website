import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "../config/config";
import htmlParser from "html-react-parser";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  const getServiceDetails = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/singleService`, {
        params: { slug },
      });
      setService(data.data);
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getServiceDetails();
    }
  }, [slug]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full h-[500px] lg:h-[600px] relative">
        {service?.serviceIcon ? (
          <img
            src={service.serviceIcon[0]?.url}
            className="w-full h-full object-cover object-top brightness-75"
            alt={service?.serviceName || "Service Image"}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex justify-center items-center">
            <span className="text-gray-500 text-2xl">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            {service?.serviceName || "Service Name"}
          </h1>
        </div>
      </div>

      {/* Service Description Section */}
      <div className="w-full px-6 lg:px-12 py-10 lg:py-14">
        {service?.description ? (
          <div className="text-white text-base lg:text-lg leading-relaxed text-justify ">
            {htmlParser(service.description)}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No description available</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
