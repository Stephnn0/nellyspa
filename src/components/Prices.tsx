import React from "react";

interface ServiceCategory {
  category: string;
  services: { name: string; price: string }[];
}

const salonPrices: ServiceCategory[] = [
  {
    category: "COMBO",
    services: [
      { name: "Manicure + Pedicure", price: "$55" },
      { name: "Gel Manicure + Pedicure", price: "$65" },
      { name: "Gel Manicure + Gel Pedicure", price: "$82" },
      { name: "Regular Pedicure", price: "$35" },
      { name: "Spa Pedicure", price: "$45" },
      { name: "Dream Spa Pedicure", price: "$75" },
    ],
  },
  {
    category: "NAILCARE",
    services: [
      { name: "Basic Manicure", price: "$22" },
      { name: "French Manicure", price: "$27" },
      { name: "Change Gel Polish (Feet)", price: "$25" },
      { name: "Acrylic Toes", price: "10 each" },
      { name: "Extra Massage", price: "$15 / 10 mins" },
    ],
  },
  {
    category: "ARTIFICIAL NAILS",
    services: [
      { name: "Acrylic Fullset", price: "$50" },
      { name: "Acrylic Refill", price: "45" },
      { name: "Dip Powder Nails", price: "$50" },
      { name: "UV Gel Fullset", price: "$65" },
      { name: "UV Gel Refill", price: "$50" },
      { name: "French", price: "$10" },
    ],
  },
  {
    category: "ADDITONAL SERVICES",
    services: [
      { name: "Eyebrows", price: "$15" },
      { name: "Chain", price: "$10" },
      { name: "Lips", price: "$10" },
      { name: "Cheek/Side Burn", price: "$16" },
      { name: "Under Arm", price: "$20" },
      { name: "Half / Full Arm", price: "$25/ $45" },
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
