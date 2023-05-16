import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 text-white">
        <p className="text-[10rem] font-bold text-slate-400">404 Error</p>
      <p className="text-6xl">Oops... Page Not Found</p>
      <Link
        to="/"
        className="flex items-center justify-between gap-2 space-x-4 rounded-lg bg-purple-700 px-10 py-6 hover:bg-purple-500"
      >
        <FaHome /> <p> Go back Home </p>
      </Link>
    </section>
  );
};

export default NotFound;
