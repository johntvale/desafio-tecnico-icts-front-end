import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Boasvindas from './pages/Boasvindas';
import Produtos from './pages/Produtos';
import Compras from './pages/Compras';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';
import DetalhesDoProduto from './pages/Produtos/DetalhesDoProduto';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Boasvindas />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<DetalhesDoProduto />} />
        <Route path="/produtos/:id/editar" element={<h1>Editar dados do produto</h1>} />
        <Route path="/produtos/:id/deletar" element={<h1>Apagar registro do produto</h1>} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/compras/:id" element={<h1>Detalhes da compra</h1>} />
        <Route path="/compras/:id/editar" element={<h1>Editar dados da compra</h1>} />
        <Route path="/compras/:id/deletar" element={<h1>Apagar registro da compra </h1>} />
        <Route path="/*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </Router>
  );
}

export default App;
