import React from "react";
import serviceImage1 from "../assets/pics/1.png"; // Adjust the path to your image
import serviceImage2 from "../assets/pics/2.png"; // Adjust the path to your image
import serviceImage3 from "../assets/pics/3.png"; // Adjust the path to your image

const ServiceCard: React.FC = () => {
  return (
    <>
      <section className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <img
              src={serviceImage1}
              alt="Service 1"
              className="w-full h-88 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Glamourous Trim
              </h3>
              <p className="text-gray-600 mb-4">
                A sleek trim to keep your hair healthy and beautiful.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <img
              src={serviceImage2}
              alt="Service 2"
              className="w-full h-88 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Elegant Fade
              </h3>
              <p className="text-gray-600 mb-4">
                A modern fade for a clean and sharp, chic look.{" "}
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <img
              src={serviceImage3}
              alt="Service 3"
              className="w-full h-88 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                The Effortless Bob{" "}
              </h3>
              <p className="text-gray-600 mb-4">
                A stylish bob for easy elegance and fresh vibes.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
