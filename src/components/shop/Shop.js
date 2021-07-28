import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.scss";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  // fetch data from Pokemon TCG API
  const fetchItems = async () => {
    // retrieve all sets from the Base series
    const data = await fetch("https://api.pokemontcg.io/v2/sets?q=series:base");
    const items = await data.json();
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

export default Shop