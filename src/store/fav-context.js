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

  function addFavoriteHandler(favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favorite);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {

      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavContext.Provider value={context}>
      {props.children}
    </FavContext.Provider>
  );
}

export default FavContext;
