import React from 'react';
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = (props) => {
  let nav = useNavigate();

  const addMeetup = (meetupRecord) => {
    fetch('https://meetups-7d92d-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupRecord),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      nav('/');
    });
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
};

export default NewMeetup;
