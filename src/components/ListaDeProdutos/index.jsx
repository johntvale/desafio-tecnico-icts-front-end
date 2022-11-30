import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ContextProdutos from '../../context/ContextProdutos';

export default function index({ produtos }) {
  const { inputFilterValue, handleInputFilter } = useContext(ContextProdutos);
  return (
    <div className="container-table">
      <div className="table-options">
        <input
          id="filter"
          type="text"
          placeholder="Digite o nome do produto"
          className="table-filter"
          onChange={handleInputFilter}
          value={inputFilterValue}
        />
        <Link to="/" className="add-product"> Acicionar Produto</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="th1">Nome</th>
            <th className="th2">Descrição</th>
            <th className="th3">Preço</th>
            <th className="th4">Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.filter((produto) => produto.nome.toLowerCase()
              .match(inputFilterValue.toLowerCase())).map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                  <td>
                    <Link
                      className="btn-details"
                      id={produto.id}
                      to="/"
                    >
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
