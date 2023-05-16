import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import useHttp from "../hooks/useHTTP";
interface UserContextProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProps> = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [noUserFound, setNoUserFound] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const API_KEY = "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";
  const API_URL = "https://api.github.com/search/users?q=";
  const {isLoading, request } = useHttp();

  //getting our users
  const getUser = (srchString: string | undefined) => {
    if(srchString === ''){
      setNoUserFound(true);
      setMessage('Please enter a value')
    }
    else{
    const applyData = (data: { items: [] }) => {
      setUsers(data.items);
     
      if (data.items.length === 0) {
        setNoUserFound(true);
        setMessage('No users found')
      }
    };
    request(
      {
        url: `${API_URL}${srchString}`,
        headers: {
          authorization: API_KEY,
        },
      },
      applyData
    );
    }
  };

  useEffect(() => {
    const timing = () => {
      if (noUserFound === true) {
        setNoUserFound(false);
      }
    };
    const closeError = setTimeout(timing, 3000);

    return () => clearTimeout(closeError);
  }, [setNoUserFound, noUserFound]);
    const userHandler = ()=>{
      setUsers([]);
    }
  const contextValues = {
    users,
    searchUser: getUser,
    noUserFound,
    userHandler,
    message,
    isLoading,
  };
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
