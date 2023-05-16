import React, { FormEvent, useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { FaWindowClose } from "react-icons/fa";

const SearchForm: React.FC = () => {
  const { message, userHandler, users, noUserFound, searchUser } =
    useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredInput = inputRef.current?.value;
    searchUser(enteredInput);
  };
  return (
    <form onSubmit={submitHandler} className="mt-6">
      {noUserFound && (
        <div className="font bold my-2 flex items-center gap-4 p-4 text-white">
          {" "}
          <FaWindowClose color="orangered" /> {message}
        </div>
      )}
      <div className="flex gap-4">
        <div className="flex w-full rounded-lg border-2 border-gray-600 md:w-1/2">
          <input
            type="search"
            className="w-full rounded-l-lg px-6 outline-none"
            placeholder="search"
            ref={inputRef}
          />
          <button
            type="submit"
            className="flex items-center justify-between gap-2 rounded-r-lg bg-gray-700 px-10 py-6 text-white hover:bg-gray-500"
          >
            {" "}
            Search{" "}
          </button>
        </div>
        {users.length > 0 && (
          <button
            className="rounded-lg bg-gray-500 px-10 text-white"
            onClick={userHandler}
          >
            {" "}
            clear{" "}
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
