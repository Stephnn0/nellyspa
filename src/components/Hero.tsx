import React from "react";
import image from "../assets/salon.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay (optional, if you want to dim the image) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NELLY'S SPA</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          At Nelly's Spa, we specialize in creating stunning hairstyles tailored
          to your unique look. Whether you're here for a quick trim or a
          complete transformation, our expert stylists provide personalized
          services in a relaxed and friendly atmosphere.
        </p>
        <p className="text-3xl  max-w-3xl">786-356-9893</p>
      </div>
    </section>
  );
};

export default Hero;
