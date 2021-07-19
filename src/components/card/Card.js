import React, { useState, useEffect } from "react";
import "./card.scss";

const Card = ({ match }) => {
  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [item, setItem] = useState({
    images: {},
    tcgplayer: {
      prices: {
        obj: {},
      },
    },
    subtypes: [],
    set: {},
    nationalPokedexNumbers: [],
  });

  const fetchItem = async () => {
    const data = await fetch(`https://api.pokemontcg.io/v2/cards/${match.params.id}`);
    const item = await data.json();
    setItem(item.data);
  };

  const prices = item.tcgplayer.prices;
  const low = prices[Object.keys(prices)[0]].low;
  const market = prices[Object.keys(prices)[0]].market;
  const high = prices[Object.keys(prices)[0]].high;
  console.log(item);

  return (
    <div className="card">
      <img src={item.images.large} alt={item.name}/>
      <div className="card-details">
        <div className="title-section">
          <h1>{item.name}</h1>
          <p>{item.supertype} - {item.subtypes[0]}</p>
        </div>
        <div className="description-section">
          <p>{item.flavorText}</p>
        </div>
        <h2>Info</h2>
        <div className="info-section">
          <div>
            <h3>HP</h3>
            <p>{item.hp}</p>
            <h3>Level</h3>
            <p>{item.level}</p>
          </div>
          <div>
            <h3>Set Name</h3>
            <p>{item.set.name}</p>
            <h3>Set Series</h3>
            <p>{item.set.series}</p>
          </div>
          <div>
            <h3>Pokedex Nº</h3>
            <p>{item.nationalPokedexNumbers[0]}</p>
            <h3>Card Nº</h3>
            <p>{item.number}/{item.set.printedTotal}</p>
          </div>
          <div>
            <h3>Artist</h3>
            <p>{item.artist}</p>
            <h3>Rarity</h3>
            <p>{item.rarity}</p>
          </div>
        </div>
        <h2>Prices</h2>
        <span>Last Updated {item.tcgplayer.updatedAt}</span>
        <div className="price-section">
          <div className="price-container">
            <h3>High Market</h3>
            <p className="high-price">${high === undefined ? "..." : high}</p>
          </div>
          <div className="price-container">
            <h3>Market</h3>
            <p>${market === undefined ? "..." : market}</p>
          </div>
          <div className="price-container">
            <h3>Low Market</h3>
            <p className="low-price">${low === undefined ? "..." : low}</p>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
};

export default Card
