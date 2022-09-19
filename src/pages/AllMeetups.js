import React, { useState, useEffect } from 'react';

import DUMMY_DATA from '../data/meetups';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetups-7d92d-default-rtdb.firebaseio.com/meetups.json')
      .then((res) => res.json())
      .then((data) => {
        const arr = [];
        for (let key in data) {
          let meetup = {
            id: key,
            ...data[key],
          };
          arr.push(meetup);
        }
        setData(arr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('AllMeetups.fetch error', error);
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h3>All Meetups</h3>
      <MeetupList data={data} />
    </section>
  );
};

export default AllMeetups;
