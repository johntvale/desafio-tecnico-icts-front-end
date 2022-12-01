import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import './style.css';
import ContextProdutos from '../../context/ContextProdutos';

export default function DetalhesProduto() {
  const { produto } = useContext(ContextProdutos);
  return (
    <main className="container-table">
      <h1>
        detalhes do produto:
        {' '}
        {produto.id}
        {produto.nome}
      </h1>
      <form />
    </main>
  );
}
