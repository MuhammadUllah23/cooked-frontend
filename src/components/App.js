import React from 'react';
import { useNavigate } from 'react-router-dom';

import Theme from './ui/Theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button, ThemeProvider } from '@mui/material';
import Login from './Login';
import Inventory from './Inventory';
import Dashboard from './Dashboard';
import Header from './layout/Header';
import './App.css'

import { Box } from "@mui/material"
import LandingPage from './LandingPage';

function App() {
  const navigate = useNavigate()

  return (
    <div className="canvas" >
      <ThemeProvider theme={Theme}>
        

        <Box sx={{
                margin: "auto", width: "80%", height: "80%", 
                
                backgroundColor: "white"
              }}>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<Login />}/>
            {/* TODO: set up routes below to only render page if user is logged in. If not then navigate to login page.*/}
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/history" element={<div>History</div>}/>
          </Routes>
        </Box>

      </ThemeProvider>

    </div>
  );
}

export default App;
