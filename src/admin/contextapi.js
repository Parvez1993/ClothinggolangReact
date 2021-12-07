import React, { useContext } from "react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const getLocalStorage = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return [];
    }
  };
  const [user, setUser] = React.useState(getLocalStorage());
  const [access, setAccess] = React.useState("");

  return (
    <UserContext.Provider value={{ user, setUser, access, setAccess }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
