import React from 'react';
import Header from '../../components/Header';
import NotFoundError from '../../components/NotFoundError';

export default function PaginaNaoEncontrada() {
  return (
    <main>
      <Header />
      <NotFoundError />
    </main>
  );
}
