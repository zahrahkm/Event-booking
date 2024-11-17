import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({
  isUserLoggedIn: false,
  loggedInUserId: "",
  token: "",
  setToken: () => {},
  setLoggedInUserId: () => {},
  setIsUserLoggedIn: () => {},
  logOut: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Initial state derived from localStorage
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState("");

  const logOut = () => {
    setToken("");
    setLoggedInUserId("");
    setIsUserLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const contextValue = {
    isUserLoggedIn,
    loggedInUserId,
    token,
    setToken,
    setLoggedInUserId,
    setIsUserLoggedIn,
    logOut,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
