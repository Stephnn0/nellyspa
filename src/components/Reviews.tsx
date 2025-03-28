import React from "react";

// Type definition for a review
interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number; // 1 to 5 stars
}

// Sample list of reviews
const reviews: Review[] = [
  {
    id: 1,
    name: "Sophie Lee",
    comment:
      "The Manicure + Pedicure combo was amazing! My nails have never looked better. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Gomez",
    comment:
      "I tried the Gel Manicure + Pedicure, and I'm in love! Lasts for weeks, and the color selection is stunning!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Roberts",
    comment:
      "I got the Dream Spa Pedicure, and it was pure luxury. My feet feel soft, and the massage was so relaxing!",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    comment:
      "The Acrylic Fullset nails were perfect! The technician was so skilled, and my nails look flawless!",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Brown",
    comment:
      "I loved my French Manicure! It’s so chic and classy. The staff was so friendly and welcoming!",
    rating: 5,
  },
];

// Review component
const Reviews: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Customer Reviews
      </h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 py-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-lg">{review.name}</span>
              <div className="ml-2 flex items-center">
                {/* Render stars based on rating */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 17.75l-5.99 3.15 1.14-6.61-4.82-4.71 6.66-.51 2.71-6.06 2.71 6.06 6.66.51-4.82 4.71 1.14 6.61L12 17.75z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
