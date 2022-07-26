import React from 'react';
import { useNavigate } from 'react-router-dom';

import Theme from './ui/Theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Button, ThemeProvider } from '@mui/material';
import Login from './Login';
import Inventory from './Inventory';
import Dashboard from './Dashboard';
import Header from './layout/Header';
import './App.css'

import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import LandingPage from './LandingPage';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <div className="canvas" >
      <ThemeProvider theme={Theme}>
            <Header />           
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>
              {/* TODO: set up routes below to only render page if user is logged in. If not then navigate to login page.*/}
              <Route path="/inventory" element={<Inventory sx={{height: 1000}}/>}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/history" element={<div>History</div>}/>
            </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
