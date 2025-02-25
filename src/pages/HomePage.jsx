import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import aboutImage from "../assets/images/firstAbout.webp";
import contactImage from "../assets/images/homeContact.webp";
import ServicesCard from "../components/ServicesCard";
import scrollTop from "../helpers/scrollTop";
import axios from "axios";
import { base_url } from "../config/config";
import BookSlider from "../components/BookSlider";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const get_services = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${base_url}/api/allServiceForWebsite`);
      setServices(data.data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get_services();
  }, []);

  return (
    <>
      <Banner />

      {/* About Us Section */}
      <section className="px-4 lg:px-14 py-10 md:py-14">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-10">
          <div
            className="w-full lg:w-[55%] flex flex-col gap-y-4 lg:pr-12 md:text-start"
            data-aos="fade-right"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#a0810e]">
              Enroute to Catalysing Digital Revolution
            </h1>
            <div>
              <p className="text-gray-300 leading-relaxed text-justify">
                NeuroCort is a dynamic force at the crossroads of Artificial
                Intelligence, advanced IT solutions, web development, and
                digital marketing, driving innovation for businesses navigating
                an ever-evolving digital landscape. We are more than a
                technology company; we are a visionary partner in building
                intelligent, adaptable, and forward-thinking systems that
                transform industries and empower growth.
                <br />
                <br />
                At NeuroCort, our foundation is built on expertise in cognitive
                technologies, adaptive IT architectures, and AI-driven
                platforms. These core competencies allow us to create solutions
                that not only address today’s challenges but also anticipate
                tomorrow’s opportunities. From streamlining workflows through
                intelligent automation to designing neural-inspired IT
                frameworks that enhance decision-making, we specialize in
                crafting systems that are innovative, scalable, and impactful.
              </p>
              <div className="flex items-center gap-x-3 mt-3">
                <MdArrowRightAlt className="text-[#a0810e]" size={30} />
                <Link
                  to="/about-us"
                  onClick={scrollTop}
                  className="uppercase text-sm text-[#a0810e]"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%]" data-aos="fade-left">
            <img
              src={aboutImage}
              className="w-full h-full object-cover rounded shadow-xl"
              alt="NeuroCort Team at Work"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* <BookSlider /> */}

      {/* Services Section */}
      <section className="px-4 lg:px-14 pt-8 pb-14">
        <div className="w-full flex flex-col gap-y-8 xs:gap-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-5">
            <div className="text-center md:text-start">
              <h2
                className="uppercase text-[#a0810e] font-medium"
                data-aos="fade-down"
              >
                Our Services
              </h2>
              <h1
                className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-300"
                data-aos="fade-right"
              >
                We Offer a Wide Variety of IT Services
              </h1>
            </div>
            <Link
              to="/services"
              onClick={scrollTop}
              className="px-4 py-2 bg-[#a0810e] text-white rounded hover:bg-[#917200] transition-all"
              data-aos="fade-left"
            >
              All Services
            </Link>
          </div>

          {/* Services Grid */}
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-[#a0810e] rounded-full animate-spin"></div>
              <p className="text-gray-400 mt-2">Loading services...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
              {services.length > 0 ? (
                services
                  .slice(0, 6)
                  .map((service, index) => (
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
                  No services available.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <div className="w-full h-[300px] md:h-[400px] relative">
          <img
            src={contactImage}
            className="w-full h-full object-cover object-top brightness-50"
            alt="Contact Background"
            loading="lazy"
          />
          <div className="px-4 lg:px-14 pt-8 pb-14 absolute top-0 bottom-0 text-white flex justify-around items-center w-full flex-col md:flex-row">
            <div className="text-center md:text-start">
              <h2
                className="text-lg lg:text-xl mb-4 font-medium"
                data-aos="fade-right"
              >
                We are all up to hearing from you
              </h2>
              <h1
                className="text-2xl sm:text-3xl lg:text-5xl font-bold"
                data-aos="fade-left"
              >
                How can we help?
              </h1>
            </div>
            <Link
              to="/contact-us"
              onClick={scrollTop}
              className="px-4 sm:px-5 py-2 sm:py-4 border border-[#a0810e] hover:bg-[#a0810e] transition-all text-lg rounded-sm"
              data-aos="flip-up"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
