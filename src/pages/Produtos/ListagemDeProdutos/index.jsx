import React from 'react';
import Header from '../../../components/Header';
import ListaDeProdutos from '../../../components/ListaDeProdutos';
import { produtos } from '../../../utils/data/mockedList';

export default function index() {
  return (
    <div className="main-page">
      <Header title="Produtos" />
      <ListaDeProdutos produtos={produtos} />
    </div>
  );
}
