import React from 'react';
import { useNavigate } from 'react-router-dom';

import theme from './ui/Theme'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button, ThemeProvider } from '@mui/material';
import Login from './Login';
import Inventory from './Inventory';
import Dashboard from './Dashboard';

import Navbar from './layout/Navbar';

import { Box } from "@mui/material"

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        

        <Box sx={{
                margin: "auto", width: "80%", height: "80vh", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
          <Routes>
            <Route path="/" element={<div>Landing Page. Back to main branch <Button onClick={() => navigate('/login')}>Login Page</Button></div>}/>
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
