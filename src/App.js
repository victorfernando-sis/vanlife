import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
