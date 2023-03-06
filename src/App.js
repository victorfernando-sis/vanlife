import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanInfo from './pages/VanInfo';

import './server'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanInfo />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
