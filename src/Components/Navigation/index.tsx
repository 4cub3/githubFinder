import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className=" w-full bg-gray-700 px-10 py-6  text-white shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <FaGithub size={40}  /> <p>Github Finder</p>
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink to="/"  end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
