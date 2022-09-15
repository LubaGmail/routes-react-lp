import React from 'react';

import DUMMY_DATA from '../data/meetups';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  return (
    <div>
      <h3>All Meetups</h3>
      <MeetupList data = {DUMMY_DATA} />
    </div>
  );
};

export default AllMeetups;
