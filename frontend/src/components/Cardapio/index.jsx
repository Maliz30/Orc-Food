import React from 'react'
import { useState, useEffect } from 'react'
import ItemCard from '../ItemCard'
import axios from 'axios';
import "./style.css"

const Cardapio = () => {
    const [items, setItems] = useState([])

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
        const pegarItems = 'http://localhost:3000/api/items';
        fetchItems(pegarItems);
    }, []);

    return (
        <section className='cardapio-wrapper'>
            <h2>Cardápio: </h2>
            <div className='items-wrapper'>
                {
                    items.map(item =>   
                        <ItemCard key={item.id} item={item} />
                    )
                }
            </div>
        </section>
    )
}

export default Cardapio