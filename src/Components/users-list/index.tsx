import React, { useContext } from "react";
import Card from "../../shared/Card";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Loading from "../Loader";

type usersType = {
  id: number;
  avatar_url: string;
  login: string;
};
const UsersList: React.FC = () => {
  const { isLoading, users } = useContext(UserContext);
  const usersList = users.map((user: usersType) => {
    return (
      <Card key={user.id}>
        <div className="flex items-center gap-6">
          <figure className="h-16 w-16 overflow-hidden rounded-full">
            <img src={user.avatar_url} alt="" className="h-full w-full" />
          </figure>
          <article>
            <p>{user.login}</p>
            <Link
              to={`/users/${user.login}`}
              className="text-[1.4rem] text-gray-400"
            >
              Visit profile
            </Link>
          </article>
        </div>
      </Card>
    );
  });
  return (
    <>
      {isLoading && <Loading />}
    <section className="my-16 grid max-h-[60rem] grid-cols-1 gap-6 overflow-y-scroll text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {!isLoading && usersList}
    </section>
    </>
  );
};

export default UsersList;
