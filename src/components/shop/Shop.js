import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.scss";

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
    <div className="shop">
      <h1>Available Sets</h1>
      <div className="sets">
        {items.map(item => (
          <Link key={item.ptcgoCode} to={`/shop/${item.id}`}>
            <div className="set-container">
              <img src={item.images.logo} alt={item.name}/>
              <div>
                <img src={item.images.symbol} alt="symbol"/>
                <p className="set-name">{item.name}</p>
                <p className="set-release-date">Released in {item.releaseDate}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Home