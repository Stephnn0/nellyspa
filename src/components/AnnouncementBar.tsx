import React, { useState, useEffect } from "react";

const AnnouncementBar: React.FC = () => {
  // State to track whether the bar should be visible
  const [isVisible, setIsVisible] = useState(true);

  // Effect to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false); // Hide when scrolled down
      } else {
        setIsVisible(true); // Show when at the top
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // If the bar is not visible, don't render it
  if (!isVisible) return null;

  return (
    <div className="bg-red-500 text-white py-1 fixed top-0 left-0 w-full z-50 flex justify-center items-center transition-all duration-300">
      <p className="text-lg font-semibold">
        ✨ You can find us at 11221 S Dixie Hwy, Pinecrest, FL 33156 ✨
      </p>
    </div>
  );
};

export default AnnouncementBar;
