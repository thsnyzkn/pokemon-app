import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, toggleFavorite] = useState([]);

  const addOrRemoveItem = (itemName) => {
    const item = favorites.find((item) => item.name === itemName);
    if (item) {
      const otherItems = favorites.filter((item) => item.name !== itemName);
      toggleFavorite(otherItems);
    } else {
      toggleFavorite([...favorites, { name: itemName }]);
    }
  };

  const value = { favorites, addOrRemoveItem };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}

export { FavoritesProvider, useFavorites };
