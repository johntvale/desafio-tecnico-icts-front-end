import React, { useState } from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import ContextProdutos from '../../context/ContextProdutos';

export default function index() {
  const [inputFilterValue, setInputFilter] = useState('');
  function handleInputFilter(e) {
    setInputFilter(e.target.value);
  }
  return (
    <ContextProdutos.Provider value={{ inputFilterValue, handleInputFilter }}>
      <ListaDeProdutos />
    </ContextProdutos.Provider>
  );
}
