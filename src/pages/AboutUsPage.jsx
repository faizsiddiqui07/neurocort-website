import React from "react";
import aboutImage from "../assets/images/aboutus.webp";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[650px] shadow-xl">
        <img
          src={aboutImage}
          alt="About Us Background"
          className="w-full h-full object-cover object-top brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase">
            About Us
          </h2>
          <p className="text-white mt-4 max-w-xl px-4 md:px-0 text-lg">
            Discover our journey to becoming a leading IT solutions provider,
            driving digital transformation across industries.
          </p>
        </div>
      </div>

      {/* Company Description Section */}
      <section className="py-12 px-4 lg:px-14">
        <div className="mx-auto">
          <h3
            className="text-2xl md:text-3xl font-bold mb-6 text-[#a0810e] text-center"
            data-aos="fade-up"
          >
            Who We Are
          </h3>
          <p
            className="text-gray-300 text-lg leading-relaxed text-justify mb-8"
            data-aos="fade-up"
          >
            NeuroCort is a dynamic force at the crossroads of Artificial
            Intelligence, advanced IT solutions, web development, and digital
            marketing, driving innovation for businesses navigating an
            ever-evolving digital landscape. We are more than a technology
            company; we are a visionary partner in building intelligent,
            adaptable, and forward-thinking systems that transform industries
            and empower growth.
            <br />
            <br />
            At NeuroCort, our foundation is built on expertise in cognitive
            technologies, adaptive IT architectures, and AI-driven platforms.
            These core competencies allow us to create solutions that not only
            address today’s challenges but also anticipate tomorrow’s
            opportunities. From streamlining workflows through intelligent
            automation to designing neural-inspired IT frameworks that enhance
            decision-making, we specialize in crafting systems that are
            innovative, scalable, and impactful.
            <br />
            <br />
            Our web development services merge technology with creativity to
            deliver custom, future-ready digital experiences. We design and
            build responsive websites, progressive web applications, and
            e-commerce platforms that are intuitive, visually engaging, and
            seamlessly integrated with AI-enhanced functionalities. Every
            project reflects our commitment to marrying form with function,
            ensuring that user experience and technological innovation go hand
            in hand.
            <br />
            <br />
            In the realm of digital marketing, NeuroCort transforms how brands
            connect with their audiences. Using AI-powered analytics,
            personalized targeting, and data-driven strategies, we craft
            campaigns that amplify reach, engagement, and results. From SEO
            optimization and content marketing to programmatic advertising and
            social media strategies, we empower businesses to thrive in the
            competitive digital ecosystem.
            <br />
            <br />
            Our vision is guided by a team of dedicated experts, including AI
            architects, data scientists, web developers, and marketing
            strategists, all working collaboratively to bring transformative
            ideas to life. We are relentless in our pursuit of excellence,
            leveraging the latest advancements in cloud computing, IoT, natural
            language processing, and AI-powered algorithms to ensure every
            solution is cutting-edge and future-proof.
            <br />
            <br />
            NeuroCort is driven by a deep commitment to innovation, creativity,
            and strategic execution. Whether it’s engineering a state-of-the-art
            IT ecosystem, developing an AI-driven application, designing a
            world-class digital presence, or implementing a targeted marketing
            campaign, our approach is always tailored, holistic, and
            results-oriented.
            <br />
            <br />
            We believe the future of technology lies in its ability to connect,
            inspire, and create opportunities for growth. NeuroCort is here to
            lead that charge, blending intelligence, design, and strategy into
            solutions that empower businesses to thrive in a digitally
            intelligent world. Let us help you shape a future defined by
            innovation and success.
          </p>

          {/* Vision and Mission Section */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              {
                title: "Our Vision",
                description:
                  "To be a trusted partner in the digital revolution, providing solutions that help businesses thrive in an ever-changing technological landscape.",
              },
              {
                title: "Our Mission",
                description:
                  "To deliver innovative, reliable, and scalable IT solutions that meet the dynamic needs of our clients and empower their growth.",
              },
            ].map((item, index) => (
              <div
                className="w-full border-2 border-[#a0810e] rounded-md shadow-xl hover:shadow-2xl p-4"
                data-aos="zoom-in-up"
                key={index}
              >
                <h4 className="text-xl font-semibold text-[#a0810e]">
                  {item.title}
                </h4>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
