import React from "react";
import { FaHashtag } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center flex-col text-white bg-gray-700 px-10 py-6 gap-4 ">
      <FaHashtag className='text-6xl'/>
      <p>&copy; 4cub3 2023</p>
    </footer>
  );
};

export default Footer;
