
import theme from './ui/Theme'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button, ThemeProvider } from '@mui/material';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<div>Landing Page</div>}/>
            <Route path="/login" element={<Login />}/>
            {/* TODO: set up routes below to only render page if user is logged in. If not then navigate to login page.*/}
            <Route path="/inventory" element={<div>Inventory</div>}/>
            <Route path="/history" element={<div>History</div>}/>
          </Routes>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
