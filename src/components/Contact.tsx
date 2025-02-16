import React, { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
};

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    // Here you could also send the form data to a backend or API
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-4xl font-semibold text-center mb-6">
          Book an Appointment
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select a Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Massage">Massage</option>
            <option value="Facial">Facial</option>
            <option value="Nails">Nails</option>
          </select>
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
