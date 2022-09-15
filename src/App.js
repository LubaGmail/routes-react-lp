import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

import MainNav from './components/layout/MainNav';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages//Favorites';
import NewMeetup from './pages/NewMeetup';

export default function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
