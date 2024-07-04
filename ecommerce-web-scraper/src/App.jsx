import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Product';
import Comparison from './components/Compare';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/compare" element={<Comparison />} />
      </Routes>
    </Router>
  );
}

export default App;
