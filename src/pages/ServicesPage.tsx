import React, { useState } from "react";
import BipolarComponent from "../components/BipolarComponent";
import image2 from "../assets/sexy.jpg";

import ba1 from "../assets/pics/1.png";
import ba2 from "../assets/pics/2.png";
import ba3 from "../assets/pics/3.png";
import ba4 from "../assets/pics/4.png";

import h1 from "../assets/pics/a.png";
import h2 from "../assets/pics/b.png";
import h3 from "../assets/pics/c.png";
import h4 from "../assets/pics/d.png";

import e1 from "../assets/pics/00.png";
import e2 from "../assets/pics/11.png";
import e3 from "../assets/pics/22.png";
import e4 from "../assets/pics/33.png";

import aa from "../assets/pics/aa.png";

// Define the service type
interface Service {
  image: string;
  title: string;
  description: string;
}

// Define the services data directly in the same file
const hairServices: Service[] = [
  {
    image: h1,
    title: "Color haircut and a blow dry",
    description: "A sleek trim to keep your hair healthy and beautiful.",
  },
  {
    image: h2,
    title: "Keratin Treatment",
    description: "A modern fade for a clean and sharp, chic look.",
  },
  {
    image: h3,
    title: "Color and highlights",
    description: "A stylish bob for easy elegance and fresh vibes.",
  },
  {
    image: h4,
    title: "Updo Style",
    description: "Big, beautiful curls for that head-turning volume.",
  },
];

const nailsServices: Service[] = [
  {
    image: aa,
    title: "Nail Perfection",
    description: "A polished manicure that’s sleek and stunning.",
  },
];

const beforeAfterServices: Service[] = [
  {
    image: ba1,
    title: "Before & After Hair Transformation",
    description:
      "Witness the stunning difference with our expert haircutting services.",
  },
  {
    image: ba2,
    title: "Before & After Manicure",
    description: "See how a simple manicure can enhance your look.",
  },
  {
    image: ba3,
    title: "Before & After Pedicure",
    description:
      "The magic of a pedicure that turns your feet from dull to dazzling.",
  },
  {
    image: ba4,
    title: "Before & After Eyebrows",
    description:
      "A perfect eyebrow shaping service for an immaculate, fresh look.",
  },
];

const eyebrowServices: Service[] = [
  {
    image: e1,
    title: "Perfect Threading",
    description: "Precise eyebrow threading for a flawless arch.",
  },
  {
    image: e2,
    title: "Sleek Waxing",
    description: "Get perfectly shaped brows with smooth waxing.",
  },
  {
    image: e3,
    title: "Tinted Brows",
    description: "A tint to give your brows a fuller, defined look that lasts.",
  },
  {
    image: e4,
    title: "Brow Shaping",
    description: "Shape your brows for a balanced and harmonious frame.",
  },
];

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("hair");

  const renderServices = (tab: string) => {
    let servicesList = [];

    switch (tab) {
      case "hair":
        servicesList = hairServices;
        break;
      case "nails":
        servicesList = nailsServices;
        break;
      case "beforeAfter":
        servicesList = beforeAfterServices;
        break;
      case "eyebrows":
        servicesList = eyebrowServices;
        break;
      default:
        servicesList = hairServices;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="text-center hover:scale-105 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full sm:w-44 h-64 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl sm:text-2xl text-black font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-black mb-6">
              {service.description}
            </p>

            {/* "Book Now" Button */}
            <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "ELA salon was created through the vision of Marianela Duran. We are nestled in the exclusive, trendy neighborhood of Coconut Grove, Miami. All of our clients are welcomed to a polished setting, which radiates the ineffable Miami Vibe! Flooded with natural sunlight, the cozy modern space has an intimate open feel."
        }
        imageSrc={image2}
        imageFirst={true}
      />
      <section className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {" "}
          <button
            onClick={() => setActiveTab("hair")}
            className={`py-2 px-6 mx-4 text-xl font-semibold ${
              activeTab === "hair"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            } rounded-lg transition duration-300`}
          >
            Hair
          </button>
          <button
            onClick={() => setActiveTab("nails")}
            className={`py-2 px-6 mx-4 text-xl font-semibold ${
              activeTab === "nails"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            } rounded-lg transition duration-300`}
          >
            Nails
          </button>
          <button
            onClick={() => setActiveTab("beforeAfter")}
            className={`py-2 px-6 mx-4 text-xl font-semibold ${
              activeTab === "beforeAfter"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            } rounded-lg transition duration-300`}
          >
            Before & After
          </button>
          <button
            onClick={() => setActiveTab("eyebrows")}
            className={`py-2 px-6 mx-4 text-xl font-semibold ${
              activeTab === "eyebrows"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            } rounded-lg transition duration-300`}
          >
            Eyebrows
          </button>
        </div>

        {/* Render the active tab content */}
        {renderServices(activeTab)}
      </section>
    </>
  );
};

export default ServicesPage;
