import React from "react";
import aboutImage from "../assets/pics/abaout1.png";

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  ">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-5xl pt-20 md:pt-2 text-black text-center font-bold  mb-8 ">
          Spa Haircuts & Beauty
        </h2>
        <p className="text-lg text-gray-600 mb-6 px-4">
          At our salon, we offer a range of nail services designed to help you
          achieve the perfect look for your hands and feet. Whether you prefer
          gel or regular polish, we have you covered. From a simple Change Gel
          Polish (Hands) for just $20 to a more luxurious Change Gel Polish
          (Feet) for $25, we have something to suit every need. If you're
          looking for a more durable solution, our Acrylic Toes are available
          for only $10 per toe, offering long-lasting style and strength. To
          enhance your experience, you can also enjoy an Extra Massage for just
          $15 per 10 minutes, providing ultimate relaxation during your
          treatment.
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
