import React, { useState, useEffect } from "react";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.pokemontcg.io/v2/sets?q=series:base");
    const items = await data.json();
    // set state
    setItems(items.data);
  };

  return (
    <div className="home">
      {items.map(item => (
        <img key={item.ptcgoCode} src={item.images.logo} alt={item.name}/>
      ))}
    </div>
  )
};

export default Home
