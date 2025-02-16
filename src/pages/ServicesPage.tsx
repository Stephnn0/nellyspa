import React from "react";
import image from "../assets/long.png";
import BipolarComponent from "../components/BipolarComponent";
import image2 from "../assets/sexy.jpg";

// Define the service type
interface Service {
  image: string;
  title: string;
  description: string;
}

// Define the services data directly in the same file
const services: Service[] = [
  {
    image: image,
    title: "Classic Haircut",
    description: "A traditional men's haircut tailored to your style.",
  },
  {
    image: image,
    title: "Fade Haircut",
    description: "A modern fade for a sharp, clean look.",
  },
  {
    image: image,
    title: "Buzz Cut",
    description: "A short, no-fuss haircut for a fresh feel.",
  },
  {
    image: image,
    title: "Pompadour",
    description: "A voluminous, stylish haircut with a bold look.",
  },
  {
    image: image,
    title: "Crew Cut",
    description: "A sleek and simple cut for a sharp, professional look.",
  },
  {
    image: image,
    title: "Undercut",
    description: "A trendy look with shorter sides and a longer top.",
  },
  {
    image: image,
    title: "Buzz Fade",
    description: "A buzz cut with a fade for a clean, edgy appearance.",
  },
  {
    image: image,
    title: "Textured Crop",
    description: "A messy, modern style with lots of texture.",
  },
  {
    image: image,
    title: "Ivy League",
    description:
      "A classic and sophisticated style with short sides and a slightly longer top.",
  },
  {
    image: image,
    title: "Caesar Cut",
    description: "A short, blunt fringe with a strong, bold look.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "ELA salon was created through the vision of Marianela Duran. We are nestled in the exclusive, trendy neighborhood of Coconut Grove, Miami. All of our clients are welcomed to a polished setting, which radiates the ineffable Miami Vibe! Flooded with natural sunlight, the cozy modern space has an intimate open feel. "
        }
        imageSrc={image2}
        imageFirst={true}
      />
      <section className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="   text-center hover:scale-105 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-44 h-64 mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl text-black font-semibold  mb-2">
                {service.title}
              </h3>
              <p className="text-black mb-6">{service.description}</p>

              {/* "Book Now" Button */}
              <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
