import React from "react";
import serviceImage1 from "../assets/sal.jpg"; // Adjust the path to your image
import serviceImage2 from "../assets/sal.jpg"; // Adjust the path to your image
import serviceImage3 from "../assets/sal.jpg"; // Adjust the path to your image

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
                Service 1
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy a premium grooming experience with hot towel shaves and
                more.
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
                Service 2
              </h3>
              <p className="text-gray-600 mb-4">
                Experience a clean, sharp haircut from our skilled barbers.
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
                Service 3
              </h3>
              <p className="text-gray-600 mb-4">
                Treat yourself to a luxury beard trim and shaping for the
                perfect look.
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
