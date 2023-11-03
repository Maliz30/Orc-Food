import React, { useEffect, useState } from 'react'
import './style.css'
import { AiOutlineSearch } from "react-icons/ai"
import axios from 'axios';

const SearchBar = () => {
  const [pesquisa, setPesquisa] = useState("")
  const [items, setItems] = useState([])

  const fetchItems = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data; // Assuming the API response has a "results" field
      setItems(data);
      console.log(items)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const pesquisarItems = `http://localhost:3000/api/items?search=${pesquisa}`;
    fetchItems(pesquisarItems);
  }, [pesquisa])


  return (
    <div><input type='text' value={pesquisa} onChange={e => setPesquisa(e.target.value)}/> <span class="material-symbols-outlined">
    search
    </span></div>
  )
}

export default SearchBar