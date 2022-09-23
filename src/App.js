import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

import MainNav from './components/layout/MainNav';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <Layout>
      <MainNav />
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}
