import React from 'react';
import { useRef } from 'react';

import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetup = (props) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const meetupRecord = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      desc: descRef.current.value,
    };

    props.onAddMeetup(meetupRecord);
  };

  const resetHandler = (event) => {
    console.log('event', event);
  };

  return (
    <Card>
      <h3>New Meetup</h3>

      <form
        className={classes.form}
        onSubmit={submitHandler}
        onReset={resetHandler}
      >
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required ref={titleRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input 
            // type="url" 
            type='text'
            id="image" name="image" required ref={imageRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            ref={addressRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" name="desc" rows="5" ref={descRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetup;
