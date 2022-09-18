import React from 'react';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = (props) => {
  const addMeetup = (meetupRecord) => {
    console.log('record', meetupRecord);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
};

export default NewMeetup;
