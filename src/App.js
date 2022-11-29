import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Página inicial </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
