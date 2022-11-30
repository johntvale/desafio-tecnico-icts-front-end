import React from 'react';
import ListaDeCompras from './ListaDeCompras';
import ContextCompras from '../../context/ContextCompras';

export default function index() {
  return (
    <ContextCompras.Provider value={{}}>
      <ListaDeCompras />
    </ContextCompras.Provider>
  );
}
