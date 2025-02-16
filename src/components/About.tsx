import React from "react";
import aboutImage from "../assets/cut.jpg"; // Adjust the path to your image

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  ">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-5xl pt-20 md:pt-2 text-black text-center font-bold  mb-8 ">
          Spa Haircuts & Beauty
        </h2>
        <p className="text-lg text-gray-600 mb-6 px-4">
          From hot towel shave treatments to hip haircuts to straight razor
          shaves, The Spot Barbershop ® offers classic grooming services in a
          modern setting. The Spot Barbershop ®’s experience is truly a cut
          above. The ambiance and skilled barbers with dedication for their
          craft makes this more than just a haircut, it makes every visit a
          gentleman’s experience.
        </p>
        <button className="mx-4 px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-200">
          Learn More
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 ">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto md:max-h-160 lg:max-h-180 p-10 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
