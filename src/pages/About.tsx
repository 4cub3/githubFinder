import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="w-full py-10">
      <div className="flex justify-between flex-col gap-4 rounded-xl  p-6 text-gray-400">
        <h1 className="text-6xl">Github Finder</h1>
        <p>
          A React App to search Github profiles and see profile details. This
          project is part of the process of me learning react
        </p>
        <p>
            version <span className="text-white">1.0.0</span>
        </p>
        <Link to="/" className="flex items-center gap-4">
          <FaArrowLeft /> go back home
        </Link>
      </div>
    </section>
  );
};

export default About;
