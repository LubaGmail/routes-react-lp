import React, { useContext } from 'react';

import MeetupList from '../components/meetups/MeetupList';
import FavContext from '../store/fav-context';

const Favorites = (props) => {
  const favContext = useContext(FavContext);
  const favorites = favContext.favorites

  let content;
  if (favContext.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList data={favorites} />;
  }

  return (
    <div>
      <h3>Favorites</h3>
        {content}    
      </div>
  );
};

export default Favorites;
