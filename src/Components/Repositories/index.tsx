import React, { useEffect, useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FaLink, FaEye, FaStar, FaInfo } from "react-icons/fa";
import { RepoTypes } from "../../types/Types";

import useHttp from "../../hooks/useHTTP";
interface RepoProps {
  // rep: RepoTypes;
  login: string;
}

const Repos: React.FC<RepoProps> = ({ login }) => {
  const [repoData, setRepoData] = useState<RepoTypes[]>([
    {
      id: 0,
      description: "",
      forks: 0,
      name: "",
      open_issues: 0,
      stargazers_count: 0,
      watchers_count: 0,
      html_url: "",
    },
  ]);
  //repo
  const { request } = useHttp();

  useEffect(() => {
    const applyData = (data: any) => {
      setRepoData(data);
      //   console.log(data)
    };
    request(
      {
        url: `https://api.github.com/users/${login}/repos`,
        headers: {
          authorization: "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",
        },
      },
      applyData
    );
  }, []);

  const repositories = repoData.map((rep) => {
    return (
      <div className="space-y-4 rounded-lg bg-gray-900 p-10" key={rep.id}>
        <h2 className="flex items-center gap-2 text-white">
          <a href={rep.html_url}>
            <FaLink />
          </a>
          {rep.name}
        </h2>
        <p className="text-white">{rep.description}</p>
        <div className="flex items-center gap-2">
          <span className="mr-2 flex items-center gap-2 rounded-xl bg-blue-950 px-4 text-blue-200">
            <FaEye />
            {rep.watchers_count}
          </span>{" "}
          <span className="mr-2  flex items-center gap-2 rounded-xl bg-green-950 px-4 text-green-200">
            <FaStar />
            {rep.stargazers_count}
          </span>{" "}
          <span className="mr-2  flex items-center gap-2 rounded-xl bg-red-950 px-4 text-red-200">
            <FaInfo />
            {rep.open_issues}
          </span>{" "}
          <span className="mr-2  flex items-center gap-2 rounded-xl bg-yellow-950 px-4 text-yellow-200">
            <CiForkAndKnife /> {rep.forks}
          </span>
        </div>
      </div>
    );
  });

  return <>{repositories}</>;
};

export default Repos;
