import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_grupoicts_rodape.png';

export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu-header">
        <button type="button" className="nav-btn selected">
          <Link to="/produtos">Produtos</Link>
        </button>
        <button type="button" className="compras nav-btn">
          <Link to="/compras">Compras</Link>
        </button>
        <button type="button" className="nav-btn sair">
          <Link to="/">Sair</Link>
        </button>
      </nav>
    </header>
  );
}
