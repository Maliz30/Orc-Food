import React, { useEffect, useState } from 'react'
import Cardapio from '../../components/Cardapio'
//import SearchBar from '../../components/SearchBar'
import axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai"

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
      <div><input type='text' value={pesquisa} onChange={e => setPesquisa(e.target.value)} /> <AiOutlineSearch /></div>
      <Cardapio item={items} />
    </>
  )
}

export default Home