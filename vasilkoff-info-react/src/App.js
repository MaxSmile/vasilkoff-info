// src/App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import RedirectionPage from './pages/RedirectionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/:slug" element={<RedirectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}