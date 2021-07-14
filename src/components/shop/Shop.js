import React, { useState, useEffect } from "react";

const Shop = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.pokemontcg.io/v2/cards?q=set.id:base1");
    const items = await data.json();
    console.log(items.data);
    // set state
    setItems(items.data);
  };

  return (
    <div>
      {items.map(item => (
        <img key={item.id} src={item.images.small} alt={item.name}/>
      ))}
    </div>
  )
};

export default Shop
