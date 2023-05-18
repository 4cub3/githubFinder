import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FaUsers, FaUser, FaSquare, FaStore } from "react-icons/fa";
import { SpeciffiedUserType } from "../types/Types";
import Repos from "../Components/Repositories";

const Users: React.FC = () => {
  const params = useParams();
  const { users } = useContext(UserContext);

  const specifiedUser = users.find((user) => user.login === params.login);
  const { avatar_url, login } = specifiedUser!;
  const [userProfile, setUserProfile] = useState<SpeciffiedUserType>({
    bio: "",
    followers: 0,
    following: 0,
    name: "",
    public_gists: 0,
    public_repos: 0,
    twitter_username: "",
    type: "",
    html_url: "",
    location: "",
    blog: "",
    hireable: "",
  });

  const userData = async () => {
    const resonse = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        authorization: "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",
      },
    });
    const data = await resonse.json();
    return data;
  };
  userData()
    .then((data) => {
      setUserProfile(data);
    })
    .catch((err) => console.log(err));
  const {
    bio,
    followers,
    following,
    name: reName,
    public_gists,
    public_repos,
    twitter_username,
    type,
    html_url,
    location,
    blog,
    hireable,
  } = userProfile;

  return (
    <section className="my-10">
      <div className=" my-10 p-4 uppercase text-white">
        <Link to="/">Back to Search</Link>
      </div>
      <div className="gap-20 space-y-10 text-white md:flex md:space-y-0">
        <figure className="relative h-[30rem] basis-1/3 overflow-hidden rounded-xl before:absolute before:h-full before:w-full before:bg-black before:opacity-30">
          <img
            src={avatar_url}
            alt=""
            className="h-full w-full object-cover object-center "
          />
          <article className="absolute bottom-0 h-1/3 w-full px-20 py-10 text-white">
            <p>{reName}</p>
            <p className="text-[1.3rem]">{login}</p>
          </article>
        </figure>
        <article className="basis-full space-y-10">
          <div>
            <h2 className="text-[1.8rem] font-bold">
              {reName}{" "}
              <span className="mx-3 rounded-xl bg-green-950 p-2 text-[1.3rem] font-bold text-green-500">
                {type}
              </span>{" "}
              <span className="rounded-xl bg-blue-950 p-2 text-[1.3rem] font-bold text-blue-500">
                {hireable ? hireable : "Hireable"}
              </span>
            </h2>

            <p>{bio}</p>
          </div>
          <div>
            <a
              href={html_url}
              target="_blank"
              className="rounded-md border  border-gray-300 bg-transparent px-10 py-4"
            >
              Visit Profile
            </a>
          </div>
          <div className="grid grid-cols-1 divide-x divide-gray-500 py-8 shadow-lg sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6">
              <h3 className="text-gray-600">Location</h3>
              <p>{location ? location : "Not available"}</p>
            </div>
            <div className="p-6">
              <h3 className="text-gray-600">website</h3>
              <p>{blog ? blog : "Not available"}</p>
            </div>
            <div className="p-6">
              <h3 className="text-gray-600">twitter</h3>
              <p>{twitter_username ? twitter_username : "Not available"}</p>
            </div>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 divide-x divide-gray-500 rounded-lg py-6 shadow-lg sm:grid-cols-2 md:grid-cols-4">
        <article className="mt-16 flex  justify-between gap-20 p-4 text-white">
          <div>
            <h3 className="text-gray-600">followers</h3>
            <p className="text-[2rem] font-extrabold">{followers}</p>
          </div>
          <FaUsers size={50} className="text-pink-600" />
        </article>
        <article className="mt-16 flex justify-between gap-20 p-6 text-white">
          <div>
            <h3 className="text-gray-600">following</h3>
            <p className="text-[2rem] font-extrabold">{following}</p>
          </div>
          <FaUser size={50} className="text-pink-600" />
        </article>
        <article className="mt-16 flex justify-between gap-20 p-6 text-white">
          <div>
            <h3 className="text-gray-600">Public Repos</h3>
            <p className="text-[2rem] font-extrabold">{public_repos}</p>
          </div>
          <FaSquare size={50} className="text-pink-600" />
        </article>
        <article className="mt-16 flex justify-between gap-20 p-6 text-white">
          <div>
            <h3 className="text-gray-600">Public Gist</h3>
            <p className="text-[2rem] font-extrabold">{public_gists}</p>
          </div>
          <FaStore size={50} className="text-pink-600" />
        </article>
      </div>

      <div className="mt-20 p-4 shadow-lg">
        <h1 className="text-[2.2rem] text-white">Latest Repository </h1>
        <div className="mt-6 space-y-4">{<Repos login={login} />}</div>
      </div>
    </section>
  );
};

export default Users;
