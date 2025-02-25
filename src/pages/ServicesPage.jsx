import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../config/config";
import serviceImage from "../assets/images/services.webp";
import ServicesCard from "../components/ServicesCard";
import scrollTop from "../helpers/scrollTop";
import contactImage from "../assets/images/homeContact.webp";

// Reusable Hero Section Component
const HeroSection = ({ image, title }) => (
  <div className="w-full h-[400px] sm:h-[450px] md:h-[600px] relative">
    <img
      src={image}
      className="w-full h-full object-cover object-top"
      alt="Background"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="w-full sm:w-[70%] lg:w-[50%] absolute inset-0 flex items-center justify-center px-4 sm:px-14">
      <h2 className="text-xl sm:text-2xl md:text-2xl text-white leading-relaxed md:leading-[40px] text-justify">
        {title}
      </h2>
    </div>
  </div>
);

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${base_url}/api/allServiceForWebsite`);
      setServices(data.data || []);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        image={serviceImage}
        title="Our services include expert consultation and solutions in digital transformation, software development, e-commerce, AI/ML, SEO strategy, and UI/UX design, tailored to drive your business success."
      />

      {/* Services Section */}
      <section className="py-12 md:pb-16 px-4 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-300">
            Our Services
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            On our way to provide you the best we have in store
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#a0810e] rounded-full animate-spin"></div>
            <p className="text-gray-400 mt-2">Loading services...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
            {services.length > 0 ? (
              services.map((service, index) => (
                <ServicesCard
                  key={index}
                  title={service.serviceName}
                  description={service.description}
                  link={service.slug}
                  image={service.serviceIcon[0]?.url}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No services available
              </p>
            )}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <ContactSection
        image={contactImage}
        heading="We are all up to hearing from you"
        subheading="How can we help?"
      />
    </div>
  );
};

// Reusable Contact Section Component
const ContactSection = ({ image, heading, subheading }) => (
  <section className="mb-8">
    <div className="w-full h-[300px] md:h-[400px] relative">
      <img
        src={image}
        className="w-full h-full object-cover object-top brightness-50"
        alt="Contact Us Background"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-around px-4 lg:px-14 text-white">
        <div className="text-center md:text-left">
          <h2 className="text-lg lg:text-xl mb-4 font-medium">{heading}</h2>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            {subheading}
          </h1>
        </div>
        <Link
          to="/contact-us"
          onClick={scrollTop}
          className="px-5 py-3 border-2 border-[#a0810e] bg-transparent 
  hover:bg-[#a0810e] hover:text-white transition-all duration-300 text-lg rounded-sm"
        >
          Contact us
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesPage;
