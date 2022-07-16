import React from 'react';
import { useNavigate } from 'react-router-dom';

import theme from './ui/Theme'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button, ThemeProvider } from '@mui/material';
import Login from './Login';
import Inventory from './Inventory';
import Dashboard from './Dashboard';

import Navbar from './ui/Navbar';

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<div>Landing Page. Back to main branch <button onClick={() => navigate('/login')}>Login Page</button></div>}/>
          <Route path="/login" element={<Login />}/>
          {/* TODO: set up routes below to only render page if user is logged in. If not then navigate to login page.*/}
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/history" element={<div>History</div>}/>
        </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
