import React from "react";

type ImageTextSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageFirst?: boolean; // Optional prop to control image-first layout
};

const BipolarComponent: React.FC<ImageTextSectionProps> = ({
  title,
  description,
  imageSrc,
  imageFirst = false, // Default is false (image on the left)
}) => {
  return (
    <div className="container mx-auto py-12">
      <div
        className={`flex flex-col md:flex-col lg:flex-row items-center gap-8 ${
          imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className=" md:px-10 lg:w-1/2 w-full px-2 lg:px-40">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BipolarComponent;
