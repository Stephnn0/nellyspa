import React from "react";

interface ServiceCategory {
  category: string;
  services: { name: string; price: string }[];
}

const salonPrices: ServiceCategory[] = [
  {
    category: "HAIRCUT & STYLE",
    services: [
      { name: "Shampoo + Cut + Blowdry", price: "$115 - $135 & Up" },
      { name: "Shampoo + Blowdry", price: "$65 - $90 & Up" },
      { name: "Shampoo + Cut", price: "$85 - $110 & Up" },
      { name: "Men's Cut + Style", price: "$55 - $75 & Up" },
      { name: "Bang Trim", price: "$30 & Up" },
      { name: "Child Cut (under 10 yrs old)", price: "$50 & Up" },
      { name: "Flat Iron (add on to blow dry only)", price: "$30 & Up" },
      { name: "Steamer (add on blow dry only)", price: "$35 & Up" },
      { name: "Up Do or Braids", price: "$105 - $125 & Up" },
      { name: "Hair Extensions", price: "By Consultation" },
    ],
  },
  {
    category: "COLOR & HIGHLIGHTS",
    services: [
      { name: "Base Color Roots", price: "$100 - $120 & Up" },
      { name: "Full Color & Recoloring", price: "$140 - $160 & Up" },
      { name: "Color Extra (More than 1 tube)", price: "$50 & Up" },
      { name: "Gloss (Non permanent color)", price: "$70 - $90 & Up" },
      { name: "Balayage & Ombré", price: "$295 - $315 & Up" },
      { name: "Highlight or Low Light Full Head", price: "$245 - $265 & Up" },
      { name: "Highlight or Low Light Partial", price: "$195 - $215 & Up" },
      { name: "Olaplex (Based on product needed)", price: "$65 & Up" },
      { name: "Color Correction", price: "By Consultation" },
      { name: "Airtouch Coloring", price: "By Consultation" },
      { name: "Vegan Color Base Roots", price: "$115 - $135 & Up" },
      { name: "Vegan Color Extra", price: "$55 & Up" },
      {
        name: "Vegan Color Roots to End Application",
        price: "$170 - $190 & Up",
      },
    ],
  },
  {
    category: "TREATMENTS",
    services: [
      { name: "Tokio Inkarami Repair Cure", price: "$250 & Up" },
      { name: "Lebel Absolute Happiness For Hair", price: "$130 - $150 & Up" },
      { name: "Leaf & Flower CBD 3 In 1", price: "$45 & Up" },
      { name: "Leaf & Flower CBD Volumizing", price: "$45 & Up" },
      { name: "B3 Bond Build3R", price: "$45 & Up" },
      { name: "B3 Extension Repair", price: "$45 & Up" },
      { name: "Rewind Anti-Aging", price: "$55 & Up" },
      { name: "Olaplex", price: "$45 & Up" },
      { name: "Metal Detox", price: "$30 & Up" },
      { name: "Deep Conditioning", price: "$30 & Up" },
      { name: "Phyto Polleine Scalp Detox", price: "$30 & Up" },
      { name: "Brazilian Blowout Keratin Men", price: "$160 & Up" },
      { name: "Brazilian Blowout Keratin Women", price: "$260 & Up" },
    ],
  },
  {
    category: "MAKEUP",
    services: [
      { name: "Day Makeup", price: "$120 & Up" },
      { name: "Evening Makeup", price: "$150 & Up" },
      { name: "Bridal Makeup", price: "$200 & Up" },
      { name: "Add On: Lashes", price: "$25 & Up" },
    ],
  },
];

const SalonPriceList: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="bg-purple-100 text-black p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Salon Price List
        </h1>

        {salonPrices.map((category) => (
          <div key={category.category} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <ul>
              {category.services.map((service, index) => (
                <li
                  key={index}
                  className="flex justify-between py-2 border-b border-gray-600"
                >
                  <span>{service.name}</span>
                  <span>{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonPriceList;
