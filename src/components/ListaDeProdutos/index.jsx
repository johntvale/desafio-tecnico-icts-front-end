import React from 'react';
import './style.css';

export default function index({ produtos }) {
  return (
    <div className="container-table">
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>
                  <button
                    className="btn-details"
                    type="button"
                    id={produto.id}
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
