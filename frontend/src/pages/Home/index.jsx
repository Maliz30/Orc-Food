import React, { useEffect, useState } from 'react'
import Cardapio from '../../components/Cardapio'
//import SearchBar from '../../components/SearchBar'
import axios from 'axios';
import Categorias from '../../components/Categorias';
import './style.css'

const Home = () => {
  const [items, setItems] = useState([])
  const [pesquisa, setPesquisa] = useState("")

  const fetchItems = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data; // Assuming the API response has a "results" field
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const pesquisarItems = `http://localhost:3000/api/items?search=${pesquisa}`;
    const pegarItems = 'http://localhost:3000/api/items';

    fetchItems(pesquisarItems);

  }, [pesquisa]);
  return (
    <>
      <div className='search-bar-wrapper'>
        <div></div>
        <input type='text' value={pesquisa} onChange={e => setPesquisa(e.target.value)} className='search-bar-input' placeholder='busque por um item do cardápio'/> <span className="material-symbols-outlined">
          search
        </span>
      </div>
      <Categorias items={items} />
      <Cardapio item={items} />
    </>
  )
}

export default Home