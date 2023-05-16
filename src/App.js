import React from 'react';
import './style.css';
import AllCountries from './components/AllCountries';
import Layout from './components/Layout';
import FavoriteCountries from './components/FavoriteCountries';
import NoPage from './components/NoPage';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<AllCountries />} />
          <Route path="favorites" element={<FavoriteCountries />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
