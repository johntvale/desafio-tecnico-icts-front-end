import React, { useContext } from 'react';
import './style.css';
import ContextProdutos from '../../context/ContextProdutos';

export default function NotFoundError() {
  const { error } = useContext(ContextProdutos);
  return (
    <main className="not-found-container">
      <div className="not-found">
        <h1>OPS! Algo deu errado</h1>
        <p>
          {`Code ${error.code} - ${error.message}`}
        </p>
      </div>
    </main>
  );
}
