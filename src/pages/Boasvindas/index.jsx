import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <main className="main-container">
      <div className="access-screen">
        <h1>Seja bem vindo(a) ao ICTS Store Manager</h1>
        <p>Modernidade e Praticidade na organização de suas compras</p>
        <nav>
          <Link to="/produtos">Meus produtos</Link>
          <Link to="/compras">Minhas compras</Link>
        </nav>
      </div>
    </main>
  );
}
