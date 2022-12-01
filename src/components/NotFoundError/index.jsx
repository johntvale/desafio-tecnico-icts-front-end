import React from 'react';
import './style.css';

export default function NotFoundError() {
  return (
    <main className="not-found-container">
      <div className="not-found">
        <h1>OPS! Algo deu errado</h1>
        <p>Erro 404 - Página não encontrada</p>
      </div>
    </main>
  );
}
