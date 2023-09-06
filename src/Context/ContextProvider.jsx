import React, { createContext } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const contextValue = {};

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
