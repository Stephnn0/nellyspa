import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/3 space-y-4 z-50">
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <InstagramIcon className="text-white" fontSize="large" />
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <FacebookIcon className="text-white" fontSize="large" />
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <TwitterIcon className="text-white" fontSize="large" />
      </div>
      <div className="bg-black p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
        <LinkedInIcon className="text-white" fontSize="large" />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
