import React, { useContext } from 'react';
import Header from '../../../components/Header';
import DetalhesProduto from '../../../components/DetalhesProduto';
import ErrorHandler from '../../../components/ErrorHandler';
import ContextProdutos from '../../../context/ContextProdutos';

export default function DetalhesDoProduto() {
  const { produto, loading, error } = useContext(ContextProdutos);
  return (
    <div className="main-page">
      <Header />
      {error && <ErrorHandler />}
      {(!loading && !error && produto) && <DetalhesProduto produto={produto} />}
    </div>
  );
}
