import React, { useState, createContext } from 'react';

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favorite);
    });
  }

  function removeFavorite(meetupId) {
    setUserFavorites((prevUserFavorites) => {
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
    isFavorite: isFavorite,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
