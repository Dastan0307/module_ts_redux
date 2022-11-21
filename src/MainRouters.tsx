import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StorePage from './pages/StorePage';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/store' element={<StorePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
  }


export default MainRoutes;