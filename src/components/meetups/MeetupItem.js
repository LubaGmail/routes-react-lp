import React, { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../../ui/Card';
import FavContext from '../../store/fav-context';

const MeetupItem = (props) => {
  const favContext = useContext(FavContext);
  const isFavorite = favContext.isFavorite(props.id);

  const toggleFav = () => {
    if (isFavorite) {
      favContext.removeFavorite(props.id);
    } else {
      const obj = {
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      }
      favContext.addFavorite(obj)
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={toggleFav}>
            {isFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
