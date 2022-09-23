import React from 'react';

import MeetupItem from './MeetupItem';
import classes from './MeetupItem.module.css';

const MeetupList = (props) => {

 

   return (
    <ul className={classes.list}>
        {props.data?.map((el, i) => {
           console.log(el)
          return (
     
            <MeetupItem
              key={el.id}
              id={el.id}
              image={el.image}
              title={el.title}
              address={el.address}
              description={el.description}
            />
          );
        })}
    </ul>
  );
};

export default MeetupList;
