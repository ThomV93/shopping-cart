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
    console.log(items.data);
    // set state
    setItems(items.data);
  };

  return (
    <div className="home">
      {items.map(item => (
        <div className="set-container" key={item.ptcgoCode}>
          <img src={item.images.logo} alt={item.name}/>
          <div>
            <img src={item.images.symbol} alt="symbol"/>
            <p className="set-name">{item.name}</p>
            <p className="set-release-date">Released in {item.releaseDate}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Home
