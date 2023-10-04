import React, { createContext, useState, useContext } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
