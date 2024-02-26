import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Card from './pages/Cards/Cards';
import Card2 from './pages/Cards/Card2';
import Card3 from './pages/Cards/Card3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
      </Routes>
    </Router>
  );
}

export default App;
