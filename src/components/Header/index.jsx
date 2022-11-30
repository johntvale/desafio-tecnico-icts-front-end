import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo_grupoicts_rodape.png';
import './style.css';

export default function Header() {
  const history = useLocation().pathname;

  function handleSelected(btn) {
    if (history.match(btn)) {
      return 'selected';
    } return '';
  }

  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu-header">
        <Link to="/produtos" className={`nav-btn ${handleSelected('produto')}`}>
          Produtos
        </Link>
        <Link to="/compras" className={`nav-btn ${handleSelected('compra')}`}>
          Compras
        </Link>
        <Link to="/" className="nav-btn sair">
          Sair
        </Link>
      </nav>
    </header>
  );
}
