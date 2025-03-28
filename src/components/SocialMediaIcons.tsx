import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/3 space-y-4 z-50">
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <a href="https://www.instagram.com/nellysspa1/">
          <InstagramIcon className="text-white" fontSize="large" />
        </a>
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <a href="https://www.facebook.com/nellysspa/">
          <FacebookIcon className="text-white" fontSize="large" />
        </a>
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <a href="https://www.yelp.com/biz/nellys-spa-hair-and-beauty-pinecrest">
          <ThumbUpIcon className="text-white" fontSize="large" />
        </a>
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <a href="https://ridefreebee.com/local-business/nelly%27s-spa:-hair-and-beauty-9266">
          <FavoriteIcon className="text-white" fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
