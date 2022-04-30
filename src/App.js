
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div> Landing Page</div>}/>
          <Route path="/login" element={<div> Login Page</div>}/>
          <Route path="/inventory" element={<div>Inventory</div>}/>
          <Route path="/history" element={<div>History</div>}/>
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
