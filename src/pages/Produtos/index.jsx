import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaDeProdutos from './ListaDeProdutos';
import ContextProdutos from '../../context/ContextProdutos';
import { GET_PRODUTOS } from '../../utils/url-dict';

export default function index() {
  const [inputFilterValue, setInputFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listaDeProdutos, setListaDeProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          GET_PRODUTOS,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
          },
        );
        setListaDeProdutos(result.data);
      } catch (err) {
        if (err.code !== undefined) {
          setError({
            code: err.code,
            message: err.code,
          });
        } else {
          setError({
            code: 500,
            message: 'Erro interno',
          });
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function handleInputFilter(e) {
    setInputFilter(e.target.value);
  }

  return (
    <ContextProdutos.Provider value={{
      loading, error, listaDeProdutos, inputFilterValue, handleInputFilter,
    }}
    >
      <ListaDeProdutos />
    </ContextProdutos.Provider>
  );
}
