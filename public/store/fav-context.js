import React, { useState, createContext } from 'react';

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favorite);
    });
  }

  function removeFavorite(meetupId) {
    setFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavorite(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    itemIsFavorite: isFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavContext;
