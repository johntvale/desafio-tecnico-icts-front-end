import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Boasvindas from './pages/Boasvindas';
import ListagemDeProdutos from './pages/Produtos/ListagemDeProdutos';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Boasvindas />} />
        <Route path="/produtos" element={<h1><ListagemDeProdutos /></h1>} />
        <Route path="/produtos/:id" element={<h1>Detalhes do produto </h1>} />
        <Route path="/produtos/:id/editar" element={<h1>Editar dados do produto</h1>} />
        <Route path="/produtos/:id/deletar" element={<h1>Apagar registro do produto</h1>} />
        <Route path="/compras" element={<h1>Listagem de compras</h1>} />
        <Route path="/compras/:id" element={<h1>Detalhes da compra</h1>} />
        <Route path="/compras/:id/editar" element={<h1>Editar dados da compra</h1>} />
        <Route path="/compras/:id/deletar" element={<h1>Apagar registro da compra </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
