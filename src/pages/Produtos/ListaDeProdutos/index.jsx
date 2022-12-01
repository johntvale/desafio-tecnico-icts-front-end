import React, { useContext } from 'react';
import Header from '../../../components/Header';
import ListaProdutos from '../../../components/ListaProdutos';
import Carregando from '../../../components/Carregando';
import ErrorHandler from '../../../components/ErrorHandler';
import ContextProdutos from '../../../context/ContextProdutos';

export default function ListaDeProdutos() {
  const { listaDeProdutos, loading, error } = useContext(ContextProdutos);
  return (
    <div className="main-page">
      <Header />
      {loading && <Carregando />}
      {error && <ErrorHandler />}
      {
        (!loading && !error && listaDeProdutos)
        && <ListaProdutos listaDeProdutos={listaDeProdutos} />
}

    </div>
  );
}
