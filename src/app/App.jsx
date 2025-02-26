import React from 'react';

import Home from '../common/pages/Home/Home';
import Login from '../common/pages/Login/Login';
import Application from '../common/pages/Applications/Application';
import ApplyJob from '../common/pages/Applyjob/ApplyJob';
import { AppContextProvider } from '../common/context/AppContext';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/applyjob" element={<ApplyJob />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;