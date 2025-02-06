import React from "react";
import contactImage from "../assets/images/contactImage.webp";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactCard = ({ Icon, title, description, linkText, linkUrl }) => (
  <div
    className="bg-white shadow-md hover:shadow-xl p-8 rounded-lg flex flex-col items-center gap-y-4"
    data-aos="zoom-in"
    data-aos-duration="1000"
  >
    <Icon className="text-[#a0810e] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
    <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    {linkUrl && (
      <Link to={linkUrl} className="text-lg font-bold text-[#a0810e] hover:underline">
        {linkText}
      </Link>
    )}
  </div>
);

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <img
          src={contactImage}
          className="w-full h-full object-cover object-top brightness-50"
          alt="Contact Us Background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
            Contact us
          </h2>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-10 md:py-16 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4" data-aos="fade-up">
            We’d Love to Hear From You
          </h3>
          <p className="text-base md:text-xl text-gray-400 mb-12 leading-relaxed" data-aos="fade-up">
            Feel free to reach out by phone, email, or through our contact form below. We’ll respond within 24 hours during business days.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <ContactCard
              Icon={FaPhone}
              title="Call Us"
              description="Our team is available from Monday to Friday, 9 AM to 6 PM."
              linkText="9119897776"
              linkUrl="tel:9119897776"
            />
            <ContactCard
              Icon={IoMail}
              title="Email Us"
              description="You can send us your queries, and we’ll get back to you shortly."
              linkText="Neurocort@gmail.com"
              linkUrl="mailto:Neurocort@gmail.com"
            />
            <ContactCard
              Icon={FaLocationDot}
              title="Visit Us"
              description="Vishal Khand, Gomtinagar, Lucknow, Uttar Pradesh"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
