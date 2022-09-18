import React from 'react';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = (props) => {
  const addMeetup = (meetupRecord) => {
    fetch('https://meetups-7d92d-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupRecord),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
};

export default NewMeetup;
